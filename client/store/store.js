import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

//Customer State
const SET_CUSTOMER = "SET_CUSTOMER";

const setCustomer = (customer) => {
    return {
        type: SET_CUSTOMER,
        customer
    }
};

export const getCustomer = () => {
    return async (dispatch) => {
        const { data } = await axios.get('/profile')
        dispatch(setCustomer(data))
    }
};

const customerReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_CUSTOMER:
            return action.customer
        default:
            return state
    }
};


//Categories State
const SET_CATEGORIES = "SET_CATEGORIES";

const setCategories = (categories) => {
    return {
        type: SET_CATEGORIES,
        categories
    }
};

export const getCategories = () => {
    return async(dispatch) => {
        // const { data } = await axios.get('/products')
        // const allCategories = data.map(product => product.category)
        // const categories = new Set(allCategories)
        // dispatch(setCategories(categories))
    }
}

const categoriesReducer = (state = [], action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return action.categories
        default:
            return state
    }
};


//Single Category State
const SET_CATEGORY = "SET_CATEGORY";

export const setCategory  = (category) => {
    return {
        type: SET_CATEGORY,
        category
    }
};

const singleCategoryReducer = (state = '', action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return action.category
        default:
            return state
    }
};

//Products State
const SET_PRODUCTS = "SET_PRODUCTS";

const setProducts  = (products) => {
    return {
        type: SET_PRODUCTS,
        products
    }
};

export const getProducts = (category) => {
    return async(dispatch) => {
        const { data } = await axios.get('/products')
        const categoryProducts = data.filter(product => product.category === category)
        dispatch(setProducts(categoryProducts))
    }
}

const productsReducer = (state = [], action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return action.category
        default:
            return state
    }
};



//Single Product State
const SET_PRODUCT = "SET_PRODUCT";

const setProduct = (product) => {
    return {
        type: SET_PRODUCT,
        product
    }
};

export const getProduct = (productId) => {
    return async(dispatch) => {
        const { data } = await axios.get(`/products/${productId}`)
        dispatch(setProduct(data))
    }
}

const productReducer = (state = {} , action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return action.product
        default:
            return state
    }
};


const reducer = combineReducers({
    customer: customerReducer,
    categories: categoriesReducer,
    singleCategory: singleCategoryReducer,
    products: productsReducer,
    singleProduct: productReducer
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
