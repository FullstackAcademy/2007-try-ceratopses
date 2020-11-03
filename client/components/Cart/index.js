import React from 'react';
import CartContainer from '../Cart/CartContainer';
import cartReducer from '../../store/cart';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//Store
const store = createStore(cartReducer);

const Cart = () => {
  return (
    <Provider store={store}>
      <CartContainer />
    </Provider>
  );
};

export default Cart;
