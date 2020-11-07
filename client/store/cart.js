import {
  SET_CART,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CLEAR_CART,
} from '../store/cartActions.js';

// initial state
const initialState = {
  cartItems: {},
  // quantity: 0,
};

//Cart Reducer
const cartReducer = (state = initialState, action) => {
  const item = action.payload;
  console.log({ state, action });
  switch (action.type) {
    case SET_CART:
      return action.cartItems;
    case CART_ADD_ITEM:
      const existedProduct = state.cartItems.find(
        (el) => el.product === item.product
      );
      if (existedProduct) {
        return {
          cartItems: state.cartItems.map((el) =>
            el.product === existedProduct.product ? item : el
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };

    case CART_REMOVE_ITEM:
      return { cartItems: state.cartItems.filter((el) => el.product !== item) };

    case CLEAR_CART:
      return initialState;
    // return Object.assign({}, (state.cartItems = []));

    default:
      return state;
  }
};

export { cartReducer };
