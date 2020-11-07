import React, { useState } from 'react';
import { getProducts } from '../../store/store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../../store/categories';

class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { categories } = this.props;
    if (categories.length !== 0) {
      return (
        <div id="categories">
          {categories.map((category) => {
            return (
              <div key={category}>
                <Link to={`/categories/${category}`}>
                  <div>{category}</div>
                  {/* category.image wont exist. create? or use static images? */}
                  <img src={category.image}></img>
                </Link>
              </div>
            );
          })}
        </div>
      );
    }
    return <div>No Categories</div>;
  }
}

const mapState = (state) => ({ categories: state.categories });

const mapDispatch = (dispatch) => {
  return {
    getCategories: () => dispatch(getCategories()),
  };
};

export default connect(mapState, mapDispatch)(Categories);

/**************************************** */

// const allCategories = [
//   'all',
//   ...new Set(products.map((product) => product.category)),
// ];
// console.log(allCategories);

// const Categories = (props) => {
//   const { products } = props;
//   const [listProducts, setListProducts] = useState(products);
//   const [categories, setCategories] = useState(allCategories);

//   const filterProducts = (category) => {
//     if (category === 'all') {
//       setListProducts(products);
//       return;
//     }
//     const newProducts = products.filter(
//       (product) => product.category === category
//     );
//     setListProducts(newProducts);
//   };

//   return (
//     <main>
//       <section className="list section">
//         <div className="title">
//           <h2>Our Categories</h2>
//           <div className="underline"></div>
//         </div>
//         <CategoriesList
//           categories={categories}
//           filterProducts={filterProducts}
//         />
//         <ProductsList products={listProducts} />
//       </section>
//     </main>
//   );
// };

// const CategoriesList = ({ categories, filterProducts }) => {
//   return (
//     <div className="btn-container">
//       {categories.map((category, index) => {
//         return (
//           <button
//             type="button"
//             className="filter-btn"
//             key={index}
//             onClick={() => filterProducts(category)}
//           >
//             {category}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// const ProductsList = ({ products }) => {
//   return (
//     <div className="section-center">
//       {products.map((listProduct) => {
//         const { id, title, photoUrl, description } = listProduct;
//         return (
//           <article key={id} className="list-product">
//             <img src={photoUrl} alt={title} className="photo" />
//             <div className="product-info">
//               <header>
//                 <h4>{title}</h4>
//               </header>
//               <p className="product-text">{description}</p>
//             </div>
//           </article>
//         );
//       })}
//     </div>
//   );
// };

// export default Categories;
