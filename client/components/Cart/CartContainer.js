import React, { useEffect } from 'react';
import CartItem from './CartItem';
import CartNav from './CartNav';

import { connect } from 'react-redux';
import {
  CLEAR_CART,
  GET_TOTALS,
  // saveCheckout,
  // savePayment,
} from '../../store/cartActions.js';

const CartContainer = ({ cartItems = [], total, dispatch }) => {
  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cartItems, dispatch]);
  if (cartItems.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Your Shopping Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <div>
        <CartNav />
      </div>
      <header>
        <h2>Your Shopping Bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className="clear-btn"
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          Clear Cart
        </button>
        <button
          // onClick={() => {
          //   props.history.push('/signin?redirect=checkout');
          // }}
          className="checkout-btn"
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps = (store) => {
  return { cartItems: store.cart, total: store.total };
};
export default connect(mapStateToProps)(CartContainer);
