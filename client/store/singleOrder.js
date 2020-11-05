import axios from "axios";

////// USER DETAILS - FOR ADMIN ////
const SET_ORDER = "SET_ORDER";
const DELETE_ORDER = "DELETE_ORDER"

const setOrder = (order) => {
    return {
        type: SET_ORDER,
        order
    }
};

export const fetchOrder = (orderId) => {
    return async(dispatch) => {
        const { data } = await axios.get(`/api/admin/orders/${orderId}`)
        dispatch(setOrder(data))
    }
}

export const singleOrderReducer = (state = {} , action) => {
    switch (action.type) {
        case SET_ORDER:
            return action.order
        case DELETE_ORDER:
            return {}
        default:
            return state
    }
};
