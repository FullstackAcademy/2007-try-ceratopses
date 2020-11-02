import axios from "axios";

/////// USERS - FOR ADMIN //////

const GET_USERS = "GET_USERS"
const DELETE_USER = "DELETE_USER"
const ADD_USER = "ADD_USER"

const getUsers = (users) => {
    return {
        type: GET_USERS,
        users
    }
}

const _deleteUser = (userId) => {
    return {
        type: DELETE_USER,
        userId
    }
}

const _addUser = (user) => {
    return {
        type: ADD_USER,
        user
    }
}

export const fetchUsers = () => {
    return async(dispatch) => {
        const {data} = await axios.get(`/api/admin/users`)
        dispatch(getUsers(data))
    }
}

export const deleteUser = (userId) =>{
    return async (dispatch) =>{
        try {
            await axios.delete(`/api/admin/users/${userId}`)
            dispatch(_deleteUser(userId))
        } catch (error) {
            console.log(error)
        }
    }
}

export const addUser = (user) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post('/api/admin/users/', user)
          dispatch(_addUser(data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const editUser = (userId, userProfile) => {
    return async (dispatch) => {
        try {
          await axios.put(`/api/admin/users/${userId}`, userProfile)
          dispatch(fetchUsers())
        } catch (error) {
         console.log(error)
        }
    }
}

export const usersReducer  = (state = [], action) => {

    switch (action.type){
        case GET_USERS:
            return action.users
        case DELETE_USER:
            return state.filter(user => user.id!=action.userId)
        case ADD_USER:
            return [...state, action.user ]
        default:
            return state
    }
}
