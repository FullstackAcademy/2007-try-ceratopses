import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartNav from './CartNav';
import { connect } from 'react-redux';

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

  async componentDidMount() {
    try {
      await this.props.addToCart(
        this.props.match.params.id,
        this.props.quantity
      );
    } catch (error) {
      console.log(error);
    }
  }

  removeFromCartHandler(productId) {
    dispatch(removeFromCart(productId));
  }

  updateCartHandler(productId, quantity) {
    dispatch(updateCartItem(productId, quantity));
  }

  checkoutHandler() {
    props.history.push('/signin?redirect=checkout');
  }
  render() {
    const { cartItems } = this.props;
    if (!cartItems) {
      return (
        <section className="cart">
          <header>
            <h2>Your Shopping Bag</h2>
            <h4 className="empty-cart">Cart is currently empty</h4>
          </header>
        </section>
      );
    } else {
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
                          <img src={item.photoUrl} alt="product" />
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
                                updateCartHandler(item.product, item.quantity)
                              }
                            >
                              Remove
                            </button>
                            <button
                              type="button"
                              className="remove-btn"
                              onClick={() =>
                                removeFromCartHandler(item.product)
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
                total ( {cartItems.reduce((x, y) => x + y.quantity, 0)}items) :
                ${' '}
                {parseFloat(
                  cartItems
                    .reduce((x, y) => x + y.price * y.quantity, 0)
                    .toFixed(2)
                )}
              </h4>
            </div>
            <button className="clear-btn" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
            <button
              onClick={checkoutHandler}
              className="checkout-btn"
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </footer>
        </section>
      );
    }
  }
}

const mapStateToProps = (store) => {
  return { cartItems: store.cart };
};
export default connect(mapStateToProps)(CartContainer);
