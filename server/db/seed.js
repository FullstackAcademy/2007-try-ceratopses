const {
  db,
  Users,
  Sessions,
  Reviews,
  Products,
  Addresses,
  OrderItems,
  Orders,
} = require("./index");
const faker = require("faker");
const axios = require("axios");

const seed = async () => {
  let nonediblePlants = await axios.get(
    "https://trefle.io/api/v1/distributions/NWY/plants?token=hS9_xhLSEjXCR3J02RDdV0a19Sig4wvcnLnwLKbEyJM&filter[edible]=false"
  );
  nonediblePlants = nonediblePlants.data.data;

  nonediblePlants = nonediblePlants.map((plant, idx) => {
    return {
      title: plant.common_name,
      price: faker.random.number({
        min: 100,
        max: 3000
      })/100,
      photoUrl: plant.image_url,
      category: "tree",
      tags: `${faker.commerce.productAdjective()},${faker.commerce.productAdjective()}`,
      lightRequirement: "full sun",
      description: faker.commerce.productDescription(),
      inventory: faker.random.number({
        min: 0,
        max:20
      }),
    };
  });

  let ediblePlants = await axios.get(
    "https://trefle.io/api/v1/distributions/NWY/plants?token=hS9_xhLSEjXCR3J02RDdV0a19Sig4wvcnLnwLKbEyJM&filter[edible]=true"
  );
  ediblePlants = ediblePlants.data.data;

  ediblePlants = ediblePlants.map( plant => {
    return {
      title: plant.common_name,
      price: faker.random.number({
        min: 100,
        max: 3000
      })/100,
      photoUrl: plant.image_url,
      category: "tree",
      tags: "edible",
      lightRequirement: "full sun",
      description: faker.commerce.productDescription(),
      inventory: faker.random.number({
        min: 0,
        max:20
      })
    };
  });

  const users = [
    {
      firstName: "Test",
      lastName: "Testerson",
      email: "test@test.com",
      hashedPassword: "12345",
      admin: true,
    },
    {
      firstName: "Example",
      lastName: "Exampler",
      email: "test2@test.com",
      hashedPassword: "12345",
      admin: true,
    },
    {
      firstName: "Notan",
      lastName: "Admin",
      email: "test3@test.com",
      hashedPassword: "12345",
      admin: false,
    },
    {
      firstName: "Stillnot",
      lastName: "Anadmin",
      email: "test4@test.com",
      hashedPassword: "12345",
      admin: false,
    },
  ];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const sessions = users.map( (user,idx) => {
    return { sid: faker.random.uuid(), userId: idx+1, expiration: tomorrow }
      });

  const products = [
    {
      title: "Maple Tree",
      price: 50.43,
      category: "tree",
      tags: "tag1,tag2,tag3",
      lightRequirement: "full sun",
      description: "It's a tree. Plant it.",
      inventory: 3,
    },
    {
      title: "Cut Flowers",
      price: 14.99,
      category: "flower",
      tags: "tag1,tag2,tag3",
      lightRequirement: "na",
      description: "You'll love these flowers. They smell nice.",
      inventory: 15,
    },
    {
      title: "Cactus",
      price: 5.99,
      category: "succulent",
      tags: "drought tolerant,tag2,tag3",
      lightRequirement: "full sun",
      description: "Watch out for the spikes!",
      inventory: 5,
    }, ...nonediblePlants,
     ...ediblePlants
  ];

  const reviews = [
    {
      userId: 1,
      productId: 2,
      rating: 5,
      fullReview: "I love this plant. It's a good plant",
    },
    {
      userId: 4,
      productId: 3,
      rating: 1,
      fullReview: "Don't like it. Too spiky.",
    },...ediblePlants.map(plant => {
      return {
        userId: faker.random.number({
          min:1,
          max: users.length
        }),
        productId:faker.random.number({
          min:1,
          max: products.length
        }),
        rating: faker.random.number({
          min:0,
          max: 5
        }),
        fullReview: "Nice plant but a little standoffish"
      }
    })
  ];



  const addresses = users.map( (user,idx) => {
    return{
      preferred: true,
      userId: idx+1,
      firstName: user.firstName,
      lastName: user.lastName,
      buildingNumber: Math.floor(Math.random()*300),
      unitNumber: faker.address.secondaryAddress(),
      street: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zip: faker.address.zipCode(),
    }
  }
  )

  const orderItems = []

  function makeOrderItem(orderId, productId, quantity){
    orderItems.push({ orderId: orderId, productId: productId, quantity: quantity, subtotal: products[productId-1].price*quantity })
  }

  for(let x=1;x<=users.length;x++){
    makeOrderItem(x, faker.random.number({
      min: 1,
      max: products.length
    }), faker.random.number({
      min: 1,
      max: 5
    }))

    makeOrderItem(x, faker.random.number({
      min: 1,
      max: products.length
    }), faker.random.number({
      min: 1,
      max: 5
    }))
  }

  //create an order for every user, search for the associated items, add their subtotals into a final price to calculate sales tax and grand total

  const orders = users.map( (user, idx) =>{
    const price = orderItems.filter( items => items.orderId === idx+1).reduce( (acc, cVal) => {
      return acc+cVal.subtotal
    },0)

    return {
      userId: idx+1,
      addressId: idx+1,
      status: "created",
      salesTax: (price*.08875).toFixed(2),
      shipping: 0,
      grandTotal: (price+(price+.08875)).toFixed(2),
      orderedAt: new Date(),
    }

  })


  try {
    await db.sync({ force: true });
    await Users.bulkCreate(users);
    await Sessions.bulkCreate(sessions);
    await Products.bulkCreate(products);
    await Reviews.bulkCreate(reviews);
    await Addresses.bulkCreate(addresses);
    await Orders.bulkCreate(orders);
    await OrderItems.bulkCreate(orderItems);

    console.log("seeded users!");
  } catch (error) {
    console.log("ERROR", error);
  }
};

seed();
