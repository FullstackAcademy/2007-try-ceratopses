import axios from "axios";

//Single Product State
const SET_PRODUCT = "SET_PRODUCT";

const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    product,
  };
};

export const getProduct = (productId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/products/${productId}`);
      dispatch(setProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const writeAReview = (reviewObj) => {
  return async(dispatch) => {
    try {
      const newReview = (await axios.post('/api/reviews',reviewObj)).data
      let productId = reviewObj.productId
      const product = (await axios.get(`/api/products/${productId}`)).data
      dispatch(setProduct(product));
    }
    catch (error) {
      console.log(error)
    }
  }
}

export const singleProductReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return action.product;
    default:
      return state;
  }
};
