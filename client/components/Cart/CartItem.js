import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
  quantity,
  remove,
  increase,
  decrease,
}) => {
  return (
    <div className="cart-item">
      <img src={photoUrl} alt={title} />
      <div>
        <Link className="item-title" to={`/products/${cartItems._id}`}>
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
        <p className="amount">{quantity}</p>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={() => decrease()}
          onClick={() => {
            if (quantity === 1) {
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
  const { id, quantity } = props;
  console.log(props);
  return {
    remove: () => dispatch({ type: REMOVE, payload: { id } }),
    // (removeItem(id)),
    increase: () => dispatch({ type: CART_ADD_ITEM, payload: { id } }),
    decrease: () =>
      dispatch({ type: CART_SUBTRACT_ITEM, payload: { id, quantity } }),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
