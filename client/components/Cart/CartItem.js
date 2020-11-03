import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cartItems from '../../../server/db/cartSeed.js';
import {
  CART_ADD_ITEM,
  CART_SUBTRACT_ITEM,
  REMOVE,
  // removeItem,
} from '../../store/cartActions.js';

const CartItem = ({
  photoUrl,
  title,
  price,
  amount,
  remove,
  increase,
  decrease,
}) => {
  return (
    <div className="cart-item">
      <img src={photoUrl} alt={title} />
      <div>
        <Link className="item-title" to={'/products/' + cartItems.title}>
          <h4>{title}</h4>
        </Link>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove()}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increase()}>
          +
        </button>
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={() => decrease()}
          onClick={() => {
            if (amount === 1) {
              return remove();
            } else {
              return decrease();
            }
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => {
  const { id, amount } = props;
  console.log(props);
  return {
    remove: () => dispatch({ type: REMOVE, payload: { id } }),
    // (removeItem(id)),
    increase: () => dispatch({ type: CART_ADD_ITEM, payload: { id } }),
    decrease: () =>
      dispatch({ type: CART_SUBTRACT_ITEM, payload: { id, amount } }),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
