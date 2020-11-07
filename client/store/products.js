import axios from "axios";

//Products State
const SET_PRODUCTS = "SET_PRODUCTS";
const DELETE_PRODUCT = "DELETE_PRODUCT"
const ADD_PRODUCT = "ADD_PRODUCT"

const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};


const _deleteProduct = (productId) => {
  return {
      type: DELETE_PRODUCT,
      productId
  }
}

const _addProduct = (product) => {
  return {
      type: ADD_PRODUCT,
      product
  }
}

export const getProducts = (category="") => {
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

export const deleteProduct = (productId) =>{
  return async (dispatch) =>{
      try {
          await axios.delete(`/api/admin/products/${productId}`)
          dispatch(_deleteProduct(productId))
      } catch (error) {
          console.log(error)
      }
  }
}

export const addProduct = (product) => {
  return async (dispatch) => {
      try {
          const {data} = await axios.post('/api/admin/products/', product)
        dispatch(_addProduct(data))
      } catch (error) {
          console.log(error)
      }
  }
}

export const editProduct = (productId, productData) => {
  return async (dispatch) => {
      try {
        await axios.put(`/api/admin/products/${productId}`, productData)
        dispatch(getProducts())
      } catch (error) {
       console.log(error)
      }
  }
}

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
      case DELETE_PRODUCT:
        return state.filter(product => product.id!=action.productId)
      case ADD_PRODUCT:
      return [...state, action.product ]
    default:
      return state;
  }
};
