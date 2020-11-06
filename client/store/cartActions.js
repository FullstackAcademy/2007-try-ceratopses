import axios from 'axios';
import Cookie from 'js-cookie';

// export const FETCH_ORDERS = 'FETCH_ORDERS';
export const CART_ADD_ITEM = 'CART_ADD_ITEM';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
export const CLEAR_CART = 'CLEAR_CART';
// export const UPDATE_CART = 'UPDATE_CART';
//export const CART_SUBTRACT_ITEM = 'CART_SUBTRACT_ITEM',

//Action Creators & Thunks

//add to cart
const addToCart = (productId, quantity) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${productId}`);
    console.log(data);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        title: data.title,
        photoUrl: data.photoUrl,
        price: data.price,
        inventory: data.inventory, //count in stock
        quantity,
      },
    });
    const {
      cart: { cartItems },
    } = getState();

    Cookie.set('cartItems', JSON.stringify(cartItems));
  } catch (error) {
    console.log(error);
  }
};

//remove from cart
const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  const {
    cart: { cartItems },
  } = getState();

  Cookie.set('cartItems', JSON.stringify(cartItems));
};

// fetchCart
// const fetchOrders = (productId, quantity) => async (dispatch, getState) => {
//   try {
//     const { data } = await axios.get(`/api/orderItems/${productId}`);
//     console.log(data);
//     dispatch({
//       type: FETCH_ORDERS,
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

//update cart
// const updateCart = (productId, quantity) => async (dispatch, getState) => {
//   try {
//     const { data } = await axios.put(`/api/orderItems/${productId}`);
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

export { addToCart, removeFromCart };
//export { addToCart, updateCart, removeFromCart, fetchOrders };
