import axios from 'axios'

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
        try {
            const { data } = await axios.get('/api/products')
        const uniqueCategories = []
        data.map(product => product.category.forEach(category => {
            if (!uniqueCategories.includes(category)) {
                uniqueCategories.push(category)
            }
        }))
        console.log('thunk', uniqueCategories)
        dispatch(setCategories(uniqueCategories))
        } catch (error) {
            console.log(error)
        }
    }
}

export const categoriesReducer = (state = [], action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return action.categories
        default:
            return state
    }
};
