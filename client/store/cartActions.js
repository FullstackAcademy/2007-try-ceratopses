import axios from 'axios';

export const CART_ADD_ITEM = 'CART_ADD_ITEM';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
export const CLEAR_CART = 'CLEAR_CART';
// export const FETCH_ORDERS = 'UPDATE_CART';
// export const UPDATE_CART = 'UPDATE_CART';
//export const CART_SUBTRACT_ITEM = 'CART_SUBTRACT_ITEM',

//Action Creators & Thunks

//add to cart
const addToCart = (productId, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/orders/${productId}`);
    console.log(data);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data.id,
        title: data.title,
        photoUrl: data.photoUrl,
        price: data.price,
        inventory: data.inventory, //count in stock
        quantity,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

//remove from cart
const removeFromCart = (productId) => (dispatch) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
};

// fetchCart
// const fetchOrders = (productId, quantity) => async (dispatch, getState) => {
//   try {
//     const { data } = await axios.get(`/api/orders/${productId}`);
//     console.log(data);
//     dispatch({
//       type: FETCH_ORDERS,
//       payload: {
//         product: data._id,
//         quantity,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

//update cart
// const updateCart = (productId, quantity) => async (dispatch, getState) => {
//   try {
//     const { data } = await axios.put(`/api/orders/${productId}`);
//     console.log(data);
//     dispatch({
//       type: UPDATE_CART,
//       payload: {
//         product: data._id,
//         quantity,
//       },
//     });
//     const {
//       cart: { cartItems },
//     } = getState();

//     Cookie.set('cartItems', JSON.stringify(cartItems));
//   } catch (error) {
//     console.log(error);
//   }
// };

//const removeFromCart = (productId) => async (dispatch, getState) => {
// try {
//   await axios.delete(`/api/orders/${productId}`);
// dispatch({ type: CART_REMOVE_ITEM, payload: productId });
// const {
//   cart: { cartItems },
// } = getState();

// Cookie.set('cartItems', JSON.stringify(cartItems));
// } catch (error) {
//   console.log(error);
// }
//};

export { addToCart, removeFromCart };
//export { addToCart, updateCart, removeFromCart};
