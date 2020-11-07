import axios from 'axios';

const SET_USER_CART = "SET_USER_CART";

const setCart = (cart) => {
  return {
    type: SET_USER_CART,
    cart
  }
}

const createCart = (cart) => {
  return {
    type: SET_USER_CART,
    cart
  }
}

export const fetcUserCart = (userId) => {
  return async(dispatch) => {
    let userCart
    const response = (await axios.get(`api/cart/${userId}`)).data
    if (response.length > 0) {
      userCart = response
    }
    else {
      userCart = {}
    }
    dispatch(setCart(userCart))
  }
}

export const createNewCart = (userId) => {
  return async(dispatch) => {
    const newCart = (await axios.post('/api/cart'), {userId, status: 'inCart'})
    dispatch(createCart(newCart.data))
  }
}

export const addOrUpdateProductInCart = (orderId, userId, productId, productPrice) => {
  return async(dispatch) => {
    const currUserCart = (await axios.get(`api/cart/${userId}`)).data
    for (let i=0; i<currUserCart.orderItems.length; i++) {
      let currItem = currUserCart.orderItems[i]
      if (currItem.productId === productId) {
        // put request to incr. qty. by 1
        await axios.put(`/api/orderitems/${orderId}`, {orderId, productId, subtotal: subtotal + productPrice, quantity: quantity + 1 })
      }
    }
  }
}



export const cartReducer = (state = [], action) => {
  switch(action.type) {
    case SET_USER_CART:
      return action.cart
    default:
      return state
  }
}
