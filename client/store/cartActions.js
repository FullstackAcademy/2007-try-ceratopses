import axios from 'axios';

export const SET_CART = 'SET_CART';
export const CART_ADD_ITEM = 'CART_ADD_ITEM';
export const CART_UPDATE_ITEM = 'CART_UPDATE_ITEM';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
export const CLEAR_CART = 'CLEAR_CART';

//Action Creators & Thunks
const setCart = (cartItems) => {
  return {
    type: SET_CART,
    cartItems,
  };
};

const addCart = (cartItems) => {
  return {
    type: CART_ADD_ITEM,
    cartItems,
  };
};

const updateCart = (productId) => {
  return {
    type: CART_UPDATE_ITEM,
    productId,
  };
};

const removeData = (productId) => {
  return {
    type: CART_REMOVE_ITEM,
    productId,
  };
};

const clearCart = () => {
  return {
    type: CLEAR_CART,
    cartItems: [],
  };
};

//add to cart
const addToCart = (productId, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/orders/${productId}`, {
      quantity,
    });
    console.log(data);
    dispatch(addCart(data));
  } catch (error) {
    console.log(error);
  }
};

// create new Item to cart database
const createNewItem = (orderId, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/orders/${orderId}`, quantity);
    console.log(data);
    dispatch(setCart(data));
  } catch (error) {
    console.log(error);
  }
};

//update cart
const updateCartItem = (productId, quantity, status) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `/api/orderItems/${productId}`,
      { quantity },
      { status }
    );
    console.log(data);
    dispatch(updateCart(data, productId));
  } catch (error) {
    console.log(error);
  }
};

//remove from cart
const removeFromCart = (productId) => async (dispatch) => {
  try {
    await axios.delete(`/api/orders/${productId}`);
    dispatch(removeData(productId));
  } catch (error) {
    console.log(error);
  }
};

export { createNewItem, addToCart, updateCartItem, removeFromCart, clearCart };
