const {db, Users, Sessions, Reviews, Products, Addresses, OrderItems, Orders} = require('./index')
const faker = require('faker')

const seed = async() =>{

  const users = [
    {firstName: "Test",
    lastName: "Testerson",
    email: "test@test.com",
    hashedPassword: "12345",
    admin: true},
    {firstName: "Example",
    lastName: "Exampler",
    email: "test2@test.com",
    hashedPassword: "12345",
    admin: true},
    {firstName: "Notan",
    lastName: "Admin",
    email: "test3@test.com",
    hashedPassword: "12345",
    admin: false},
    {firstName: "Stillnot",
    lastName: "Anadmin",
    email: "test4@test.com",
    hashedPassword: "12345",
    admin: false}
  ]

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  const sessions = [
    {sid: faker.random.uuid(),
    userId: 2,
    expiration: tomorrow},
    {sid: faker.random.uuid(),
    userId: 3,
    expiration: tomorrow},
  ]

  const products = [
    {title: "Maple Tree",
    price: 50.43,
    category: "tree",
    tags: "tag1,tag2,tag3",
    lightRequirement: "full sun",
    description: "It's a tree. Plant it.",
    inventory:3},
    {title: "Cut Flowers",
    price: 14.99,
    category: "flower",
    tags: "tag1,tag2,tag3",
    lightRequirement: "na",
    description: "You'll love these flowers. They smell nice.",
    inventory:15},
    {title: "Cactus",
    price: 5.99,
    category: "succulent",
    tags: "drought tolerant,tag2,tag3",
    lightRequirement: "full sun",
    description: "Watch out for the spikes!",
    inventory:5},
  ]

  const reviews = [
    {userId:1,
    productId:2,
    rating: 5,
    fullReview: "I love this plant. It's a good plant"},
    {userId:4,
      productId: 3,
      rating: 1,
      fullReview: "Don't like it. Too spiky."}
  ]

  const addresses = [
    {preferred: true,
    userId: 1,
  firstName: "Test",
lastName: "Testerson",
buildingNumber:"111",
unitNumber:"9a",
street: "Test St.",
city: "New York",
state: "NY",
zip: "11106"},
{preferred: false,
  userId: 2,
firstName: "Example",
lastName: "Exampler",
buildingNumber:"555",
unitNumber:"Flr 5",
street: "Example Ave.",
city: "New York",
state: "NY",
zip: "99999"},
{preferred: false,
firstName: "Third",
lastName: "Party",
buildingNumber:"783249",
unitNumber:"Apt 16",
street: "Gift Road",
city: "New York",
state: "NY",
zip: "11111"}
  ]

const orders = [
  {userId:1,
  addressId:1,
status: "created",
salesTax: 3,
shipping:4,
grandTotal: 63.42,
orderedAt: new Date()},
{userId:2,
  addressId:2,
status: "inCart",
salesTax: 1,
shipping: 2,
grandTotal:17.99,
orderedAt: new Date()}
]

const orderItems = [
  { orderId: 1,
  productId: 1,
  quantity:1 ,
  subtotal: 50.43},
  { orderId: 1,
    productId: 3,
    quantity:1 ,
    subtotal: 5.99},
    { orderId: 2,
      productId: 2,
      quantity:1 ,
      subtotal: 14.99}
]

  try {
  await db.sync({force:true})
   await Users.bulkCreate(users)
   await Sessions.bulkCreate(sessions)
   await Products.bulkCreate(products)
   await Reviews.bulkCreate(reviews)
   await Addresses.bulkCreate(addresses)
   await Orders.bulkCreate(orders)
   await OrderItems.bulkCreate(orderItems)

    console.log("seeded users!")
  } catch (error) {
    console.log("ERROR",error)
  }

}

seed();
