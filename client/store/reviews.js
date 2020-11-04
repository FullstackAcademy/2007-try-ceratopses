import axios from "axios";

//Reviews State
const SET_REVIEWS = "SET_REVIEWS";
const ADD_A_REVIEW = "ADD_A_REVIEW";

const setReviews = (reviews) => {
  return {
    type: SET_REVIEWS,
    reviews,
  };
};

// const createAReview = (newReview) => {
//   return {
//     type: ADD_A_REVIEW,
//     newReview,
//   };
// };

export const getReviews = (productId) => {
  return async (dispatch) => {
    try {
      const reviews = (await axios.get(`/api/reviews/${productId}`)).data
      dispatch(setReviews(reviews));
    }
    catch (error) {
      console.log(error)
    }
  };
};

export const writeAReview = (reviewObj) => {
  return async(dispatch) => {
    try {
      const newReview = (await axios.post('/api/reviews',reviewObj)).data
      let productId = reviewObj.productId
      getReviews(productId)
      //dispatch(createAReview(newReview))
    }
    catch (error) {
      console.log(error)
    }
  }
}

export const reviewsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_REVIEWS:
      return action.reviews;
    // case ADD_A_REVIEW:
    //   return
    default:
      return state;
  }
};
