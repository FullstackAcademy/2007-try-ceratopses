import axios from "axios";
import hashPasswordFunc from '../../server/hashPasswordFunc'
//User State

const UPDATE_USER = "UPDATE_USER";
const REGISTER_USER = "REGISTER_USER";
const LOG_OUT = "LOG_OUT"

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        user
    }
};

export const registerAUser = (user) => {
    return {
        type: REGISTER_USER,
        user
    }
};


export const logOutUser = () => {
    return {
        type: LOG_OUT,
    }
};

export const getUser = (email, password) => {
    return async(dispatch) => {
      try {
        password = hashPasswordFunc(password)
        const userFound = (await axios.post('/api/sessions/login', {email, password})).data
        dispatch(updateUser(userFound))
      }
      catch (error) {
        console.log(error);
      }
    }
}

export const registerUser = (firstName, lastName, email, password) => {
    return async(dispatch) => {
      try {
        password = hashPasswordFunc(password)
        const newUser = (await axios.post('/api/users', {firstName, lastName, email, hashedPassword: password})).data
        dispatch(registerAUser(newUser))
      }
      catch (error) {
        console.log(error)
      }
    }
}

export const userReducer = (state = [], action) => {
  switch (action.type) {
      case UPDATE_USER:
          return action.user
      case REGISTER_USER:
          return action.user
      case LOG_OUT:
          return []
      default:
          return state
  }
};
