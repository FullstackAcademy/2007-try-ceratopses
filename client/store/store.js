import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {logger} from 'redux-logger'
import {userReducer} from './user'
import {categoriesReducer} from './categories'
import {productsReducer} from './products'
import {singleProductReducer} from './singleProduct'
import {usersReducer} from './users'
import {singleUserReducer} from './singleUser'
import { ordersReducer } from './orders'
import { singleOrderReducer } from './singleOrder'
import { cartReducer } from './cart'


const reducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    products: productsReducer,
    singleProduct: singleProductReducer,
    users: usersReducer,
    singleUser: singleUserReducer,
    orders: ordersReducer,
    singleOrder: singleOrderReducer,
    cart: cartReducer
});

const store = createStore(reducer, applyMiddleware(logger,thunkMiddleware));

export default store;
