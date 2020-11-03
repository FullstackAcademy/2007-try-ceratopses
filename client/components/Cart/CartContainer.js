import React, { useEffect } from 'react';
import CartItem from './CartItem';
import CartNav from './CartNav';
import { connect, useSelector, useDispatch } from 'react-redux';
import { CLEAR_CART, GET_TOTALS, addToCart } from '../../store/cartActions.js';

const CartContainer = ({ cartItems = [], total, dispatch }) => {
  // (props) => {
  // const cart = useSelector((state) => state.cartItems);
  // const dispatch = useDispatch();
  // const { cartItems } = cart;

  // const productId = props.match.params.id;
  // const quantity = props.location.search
  //   ? Number(props.location.search.split('=')[1])
  //   : 1;

  // useEffect(() => {
  //   if (productId) {
  //     dispatch(addToCart(productId, quantity));
  //   }
  // }, []);

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
      <article>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
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
        <button className="checkout-btn" disabled={cartItems.length === 0}>
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

// export default CartContainer;
