import {
    SET_CART,
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_UPDATE_ITEM,
    CLEAR_CART,
  } from '../store/cartActions';
  
  // initial state
  const initialState = {
    cartItems: [],
  };
  
  //Cart Reducer
  const cartReducer = (state = [], action) => {
    const item = action.payload;
    console.log({ state, action });
    switch (action.type) {
      case SET_CART:
        return action.cartItems;
      case CART_ADD_ITEM:
        return [...state, action.cartItems]
        // console.log(action.cartItems)
        // if (action.cartItems) {
        //     const existedProduct = action.cartItems.find(
        //     (el) => el.product === item.product
        //     );
        //     if (existedProduct) {
        //     return {
        //         cartItems: action.cartItems.map((el) =>
        //         el.product === existedProduct.product ? item : el
        //         ),
        //     };
        //     }
        // }
        // return { cartItems: [...state.cartItems, item] };
      //return action.cartItems;
  
      case CART_UPDATE_ITEM:
        return { cartItems: [...state.cartItems, item] };
  
      case CART_REMOVE_ITEM:
        const removedItem = state.filter(product => product.id !== action.productId)
        return removedItem
  
      case CLEAR_CART:
        return {};
      // return Object.assign({}, (state.cartItems = []));
  
      default:
        return state;
    }
  };
  
  export { cartReducer };