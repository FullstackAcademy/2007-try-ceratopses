import axios from 'axios';

export const SET_CART = 'SET_CART';
export const CART_ADD_ITEM = 'SET_CART';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
export const CLEAR_CART = 'CLEAR_CART';

//Action Creators & Thunks
const setCart = (cartItems) => {
  return {
    type: SET_CART,
    cartItems,
  };
};

const removeData = (cartItems) => {
  return {
    type: CART_REMOVE_ITEM,
    cartItems,
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
    const { data } = await axios.get(`/api/orderItems/${productId}`);
    console.log(data);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        id: data.id,
        title: data.name,
        photoUrl: data.photoUrl,
        price: data.price,
        inventory: data.inventory,
        quantity,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// create new Item to cart database
const createNewItem = (productId, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/orders/${productId}`, quantity);
    console.log(data);
    dispatch(setCart(data));
  } catch (error) {
    console.log(error);
  }
};

//update cart
const updateCart = (productId, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/orderItems/${productId}`, quantity);
    console.log(data);
    dispatch(setCart(data));
  } catch (error) {
    console.log(error);
  }
};

//remove from cart
const removeFromCart = (userId, productId) => async (dispatch) => {
  try {
    await axios.delete(`/api/orders/${userId}/${productId}`);
    dispatch(removeData(data));
  } catch (error) {
    console.log(error);
  }
};

export { createNewItem, addToCart, updateCart, removeFromCart, clearCart };
