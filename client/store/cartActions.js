//Cart Constants

export const CART_ADD_ITEM = 'CART_ADD_ITEM';
export const CART_SUBTRACT_ITEM = 'CART_REMOVE_ITEM';
export const CART_SAVE_CHECKOUT = 'CART_SAVE_CHECKOUT';
export const CART_SAVE_PAYMENT = 'CART_SAVE_PAYMENT';
export const GET_TOTALS = 'GET_TOTALS';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE = 'REMOVE';

//Cart Actions
export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};

export const saveCheckout = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_CHECKOUT, payload: data });
};

export const savePayment = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT, payload: data });
};
