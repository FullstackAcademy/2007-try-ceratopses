import axios from "axios";

//Products State
const SET_PRODUCTS = "SET_PRODUCTS";

const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};

export const getProducts = (category) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/products");
      if (category === "") {
        dispatch(setProducts(data));
      } else {
        const categoryProducts = data.filter((product) =>
          product.category.includes(category)
        );
        dispatch(setProducts(categoryProducts));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};
