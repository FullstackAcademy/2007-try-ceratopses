import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {userReducer} from './user'
import {categoriesReducer} from './categories'
import {productsReducer} from './products'
import {singleProductReducer} from './singleProduct'


const reducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    products: productsReducer,
    singleProduct: singleProductReducer
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
