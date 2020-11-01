import React from 'react';
import { connect } from 'react-redux';
import {  Link } from 'react-router-dom';
import { getProducts } from "../../store/products";

class Products extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (!this.props.match.params.category) {
      this.props.getProducts('');
    } else {
      this.props.getProducts(this.props.match.params.category);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.category !== this.props.match.params.category) {
        this.props.getProducts(this.props.match.params.category)
    }
  }

    render() {
        const { products } = this.props
        if (products) {
            return (
                <div id='categoryProducts'>
                    { products.map(product => {
                       return (
                        <div key={product.id} id="singleProduct">
                        <Link to={`/products/${product.id}`}>
                        <img src={product.photoUrl} className="productListImg" />
                        <ul>
                          <li>Name: {product.title}</li>
                          <li>Price: ${product.price}</li>
                          {/* add to cart button + quantity field */}
                         </ul>
                         </Link>
                         </div>
                            )
                     })
                    }
                </div>
            )
        }

      return <div>No Products</div>;

  }
}

const mapState = (state) => ({
  products: state.products,
  category: state.singleCategory,
});

const mapDispatch = (dispatch) => {
  return {
    getProducts: (category) => dispatch(getProducts(category)),
  };
};

export default connect(mapState, mapDispatch)(Products);
