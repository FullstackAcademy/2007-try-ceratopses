import axios from "axios";

////// USER DETAILS - FOR ADMIN ////
const SET_USER = "SET_USER";
const DELETE_USER = "DELETE_USER"

const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
};

export const fetchUser = (userId) => {
    return async(dispatch) => {
        const { data } = await axios.get(`/api/admin/users/${userId}`)
        dispatch(setUser(data))
    }
}

export const singleUserReducer = (state = {} , action) => {
    switch (action.type) {
        case SET_USER:
            return action.user
        case DELETE_USER:
            return {}
        default:
            return state
    }
};
