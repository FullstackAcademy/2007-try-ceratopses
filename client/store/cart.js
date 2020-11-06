import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CLEAR_CART,
  // CART_SUBTRACT_ITEM,
} from '../store/cartActions.js';

// initial state
const initialState = {
  cartItems: [],
};

//Cart Reducer
const cartReducer = (state = initialState, action) => {
  const item = action.payload;
  console.log({ state, action });
  switch (action.type) {
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
      return { cartItems: state.cartItems };
    // return Object.assign({}, (state.cartItems = []));

    // if (action.type === CART_ADD_ITEM) {
    // let tempCart = state.cartItems.map((el) => {
    //   if (el.id === item.id) {
    //     el = { ...el, quantity: el.quantity + 1 };
    //   }
    //   return el;
    // });
    // return { ...state, cartItems: tempCart };
    //}

    // if (action.type === CART_SUBTRACT_ITEM) {
    // let tempCart = state.cart.map((el) => {
    //   if (el.id === item.id) {
    //     el = { ...el, quantity: el.quantity - 1 };
    //   }
    //   return el;
    // });
    // return { ...state, cart: tempCart };
    //}

    default:
      return state;
  }
};

export { cartReducer };
