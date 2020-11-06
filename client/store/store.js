import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Cookie from 'js-cookie';
import { logger } from 'redux-logger';
import { userReducer } from './user';
import { categoriesReducer } from './categories';
import { productsReducer } from './products';
import { singleProductReducer } from './singleProduct';
import { usersReducer } from './users';
import { singleUserReducer } from './singleUser';
import { cartReducer } from './cart';

const cartItems = Cookie.getJSON('cartItems') || [];

const initialState = {
  cart: { cartItems },
};

const reducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  products: productsReducer,
  singleProduct: singleProductReducer,
  users: usersReducer,
  singleUser: singleUserReducer,
  cart: cartReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(logger, thunkMiddleware))
);

export default store;
