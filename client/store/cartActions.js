import Axios from 'axios';
export const CART_ADD_ITEM = 'CART_ADD_ITEM';
export const CART_SUBTRACT_ITEM = 'CART_REMOVE_ITEM';
export const GET_TOTALS = 'GET_TOTALS';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE = 'REMOVE';

//Thunk
export const addToCart = (productId, quantity) => async (
  dispatch,
  getState
) => {
  try {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        id: data._id,
        title: data.name,
        photoUrl: data.photoUrl,
        price: data.price,
        inventory: data.inventory,
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

export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};
