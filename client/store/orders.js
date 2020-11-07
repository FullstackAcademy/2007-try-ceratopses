import axios from "axios";

/////// USERS - FOR ADMIN //////

const GET_ORDERS = "GET_ORDERS"
const DELETE_ORDER = "DELETE_ORDER"

const getOrders = (orders) => {
    return {
        type: GET_ORDERS,
        orders
    }
}

const _deleteOrder = (orderId) => {
    return {
        type: DELETE_ORDER,
        orderId
    }
}

export const fetchOrders = () => {
    return async(dispatch) => {
        const {data} = await axios.get(`/api/admin/orders`)
        dispatch(getOrders(data))
    }
}

export const deleteOrder = (orderId) =>{
    return async (dispatch) =>{
        try {
            await axios.delete(`/api/admin/orders/${orderId}`)
            dispatch(_deleteOrder(orderId))
        } catch (error) {
            console.log(error)
        }
    }
}


export const editOrder = (orderId, orderStatus) => {
    return async (dispatch) => {
        try {
            console.log("==========PUT=========")
          await axios.put(`/api/admin/orders/${orderId}`, orderStatus)
          dispatch(fetchOrders())
        } catch (error) {
         console.log(error)
        }
    }
}

export const ordersReducer  = (state = [], action) => {

    switch (action.type){
        case GET_ORDERS:
            return action.orders
        case DELETE_ORDER:
            return state.filter(order => order.id!=action.orderId)
        default:
            return state
    }
}
