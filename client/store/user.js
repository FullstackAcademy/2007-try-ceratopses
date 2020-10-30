
import axios from 'axios'

//User State

const UPDATE_USER = "UPDATE_USER";

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        user
    }
};

export const userReducer = (state = [], action) => {
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
