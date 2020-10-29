import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

//User State

const UPDATE_USER = "UPDATE_USER";

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        user
    }
};

const userReducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE_USER:
            return action.user
        default:
            return state
    }
};

export const getUser = (email, password) => {
    return async(dispatch) => {
        const userFound = (await axios.post('/api/sessions/login', {email, password})).data
        dispatch(updateUser(userFound))
    }
}


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
        const { data } = await axios.get('/api/products')
        const uniqueCategories = []
        data.map(product => product.category.forEach(category => {
            if (!uniqueCategories.includes(category)) {
                uniqueCategories.push(category)
            }
        }))
        dispatch(setCategories(uniqueCategories))
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
        const { data } = await axios.get('/api/products')
        if (category === '') {
            dispatch(setProducts(data))
        } else {
            const categoryProducts = data.filter(product => product.category.includes(category))
            dispatch(setProducts(categoryProducts))
        }
    }
}

const productsReducer = (state = [], action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return action.products
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
        const { data } = await axios.get(`/api/products/${productId}`)
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
    user: userReducer,
    categories: categoriesReducer,
    products: productsReducer,
    singleProduct: productReducer
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
