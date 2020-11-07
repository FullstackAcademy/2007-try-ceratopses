import React from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../store/singleProduct';
import Reviews from './Reviews/index';
import { addToCart } from '../store/cartActions';

class SingleProduct extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getProduct(this.props.match.params.productId);
  }

  render() {
    const { product } = this.props;
    if (product) {
      let categories = '';
      if (product.category) {
        categories = product.category.join(', ');
      }
      return (
        <div id="individualProducts">
          <h2>{product.title}</h2>
          <div className="picture">
            <img src={product.photoUrl} className="singleProductImg"></img>
          </div>
          <div className="details">
            <ul>
              <li>Price: ${product.price}</li>
              <li>
                Categories:
                {categories}
              </li>
              <li>Description: {product.description}</li>
              <li>Inventory: {product.inventory}</li>
            </ul>
            {/* //need to add functionality to below */}
            <button
              to="/cart"
              onClick={() =>
                this.props.addToCart(this.props.match.params.productId, 1)
              }
            >
              Add to Cart
            </button>
          </div>
          <Reviews />
        </div>
      );
    }
    return <div>Product Unavailable</div>;
  }
}

const mapState = (state) => ({ product: state.singleProduct });

const mapDispatch = (dispatch) => {
  return {
    getProduct: (productId) => dispatch(getProduct(productId)),
    addToCart: (productId, quantity) =>
      dispatch(addToCart(productId, quantity)),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
