import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { userReducer } from './user';
import { categoriesReducer } from './categories';
import { productsReducer } from './products';
import { singleProductReducer } from './singleProduct';
import { cartReducer } from './cart';

const reducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  products: productsReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
