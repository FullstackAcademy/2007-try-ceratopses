import {
  CART_ADD_ITEM,
  CART_SUBTRACT_ITEM,
  // CART_SAVE_CHECKOUT,
  // CART_SAVE_PAYMENT,
  REMOVE,
  GET_TOTALS,
  CLEAR_CART,
} from '../store/cartActions.js';
import cartItems from '../../server/db/cartSeed';

// initial state
const initialState = {
  cart: cartItems,
  checkout: {},
  payment: {},
  total: 0,
  amount: 0,
};

//Cart Reducer
export const cartReducer = (state = initialState, action) => {
  const item = action.payload;
  // console.log({ state, action });

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === CART_SUBTRACT_ITEM) {
    let tempCart = state.cart.map((el) => {
      if (el.id === item.id) {
        el = { ...el, amount: el.amount - 1 };
      }
      return el;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === CART_ADD_ITEM) {
    let tempCart = state.cart.map((el) => {
      if (el.id === item.id) {
        el = { ...el, amount: el.amount + 1 };
      }
      return el;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === REMOVE) {
    console.log(action.payload.id);
    return {
      ...state,
      cart: state.cart.filter((el) => el.id !== item.id),
    };
  }

  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  // if (action.type === CART_SAVE_CHECKOUT) {
  //   return { ...state, checkout: item };
  // }

  // if (action.type === CART_SAVE_PAYMENT) {
  //   return { ...state, payment: item };
  // }

  console.log({ state, action });
  return state;
};

export default cartReducer;
