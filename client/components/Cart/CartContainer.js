import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartNav from './CartNav';
import { connect } from 'react-redux';
import Checkout from '../Checkout'

import {
  createNewItem,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} from '../../store/cartActions';

class CartContainer extends Component {
  constructor(props) {
    super(props);
  }

//   async componentDidMount() {
//     try {
//       await this.props.addToCart(
//         this.props.match.params.id,
//         this.props.quantity
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   removeFromCartHandler(productId) {
//     this.props.removeFromCart(productId);
//   }

//   updateCartHandler(productId, quantity) {
//     dispatch(updateCartItem(productId, quantity));
//   }


  render() {
    const { cartItems } = this.props;
    console.log(this.props)
    if (!cartItems || cartItems === undefined) {
      return (
        <section className="cart">
          <header>
            <h2>Your Shopping Bag</h2>
            <h4 className="empty-cart">Cart is currently empty</h4>
          </header>
        </section>
      );
    } else {
        console.log('cartItems', cartItems)
      return (
        <section className="cart">
          <div>
            <CartNav />
          </div>
          <header>
            <h2>Your Shopping Bag</h2>
          </header>
          <article>
            <div className="cart-list">
              <ul className="cart-list-container">
                {cartItems.map((item) => {
                  return (
                    <li key={item.id}>
                      <div className="cart-item">
                        <div className="item-image">
                          <img src={item.photoUrl} alt="product" width='50' height='50' />
                        </div>
                        <div className="item-title">
                          <div>
                            <Link to={`/products/${item.product}`}>
                              <h4>{item.title}</h4>
                            </Link>
                          </div>
                          <div>
                            Quantity:
                            <select
                              value={item.quantity}
                              onChange={(e) =>
                                dispatch(
                                  addToCart(item.product, e.target.value)
                                )
                              }
                            >
                              {/* <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option> */}
                              {[...Array(item.inventory).keys()].map((el) => (
                                <option key={el + 1} value={el + 1}>
                                  {el + 1}
                                </option>
                              ))}
                            </select>
                            <div className="item-price">
                              <h4>${item.price}</h4>
                            </div>
                            {/* remove button */}
                            <button
                              type="button"
                              className="update-btn"
                              onClick={() =>
                                this.updateCartHandler(item.product, item.quantity)
                              }
                            >
                              Update
                            </button>
                            <button
                              type="button"
                              className="remove-btn"
                              onClick={() =>
                                this.props.removeFromCart(item.id)
                              }
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
          <footer>
            <hr />
            <div className="cart-total">
              <h4>
                  {console.log('cartItems', cartItems)}
                total ( {cartItems.length} items) :
                ${cartItems ? cartItems.reduce((acc, currentValue) => { return acc + currentValue.price }, 0) : 0 } 
              </h4>
            </div>
            <button className="clear-btn" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
            <Checkout />
          </footer>
        </section>
      );
    }
  }
}

const mapStateToProps = (store) => {
  return { cartItems: store.cart };
};

const mapDispatch = (dispatch) => {
    return {
        removeFromCart: (productId) => dispatch(removeFromCart(productId)),
    }
}
export default connect(mapStateToProps, mapDispatch)(CartContainer);