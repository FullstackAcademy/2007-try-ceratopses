import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartNav from './CartNav';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cartActions.js';

const CartContainer = (props) => {
  console.log(props);

  const cart = useSelector((state) => state.cartItems);

  const { cartItems } = cart;

  const productId = props.match.params.id;
  const quantity = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, []);

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=checkout');
  };

  if (cartItems.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Your Shopping Bag</h2>
          <h4 className="empty-cart">Cart is currently empty</h4>
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
        <div className="cart-list">
          <ul className="cart-list-container">
            {cartItems.map((item) => {
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
                          dispatch(addToCart(item.product, e.target.value))
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <div className="item-price">
                        <h4>${item.price}</h4>
                      </div>
                      {/* remove button */}
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>;
            })}
          </ul>
        </div>
      </article>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            {/* total <span>${total}</span> */}
            total ( {cartItems.reduce((x, y) => x + y.quantity, 0)}items) : ${' '}
            {cartItems.reduce((x, y) => x + y.price * y.quantity, 0)}
          </h4>
        </div>
        <button
          className="clear-btn"
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
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
};

// const mapDispatchToProps = (dispatch, props) => {
//   const { id, quantity } = props;
//   console.log(props);
//   return {
//     remove: () => dispatch(removeFromCart(id)),
//     increase: () => dispatch({ type: CART_ADD_ITEM, payload: { id } }),
//     decrease: () =>
//       dispatch({ type: CART_SUBTRACT_ITEM, payload: { id, quantity } }),
//   };
//};

//export default connect(null, mapDispatchToProps)(CartContainer);

export default CartContainer;
