import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import { userReducer } from './user';
import { categoriesReducer } from './categories';
import { productsReducer } from './products';
import { singleProductReducer } from './singleProduct';
import { usersReducer } from './users';
import { singleUserReducer } from './singleUser';

const reducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  products: productsReducer,
  singleProduct: singleProductReducer,
  users: usersReducer,
  singleUser: singleUserReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunkMiddleware));

export default store;
