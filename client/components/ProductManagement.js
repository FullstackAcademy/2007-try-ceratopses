import React from "react";
import {Route, Switch, Link} from 'react-router-dom'
import { connect } from "react-redux";
import ProductRow from "./ProductRow"
import { getProducts } from "../store/products";
import AddProduct from './AddProduct';
import AdminProduct from "./AdminProduct";

class ProductManagement extends React.Component {
  constructor(props) {
    super();
  }

 async componentDidMount() {
    await this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;
    if (products.length !== 0) {
      return (
        <div id="productsPanel" className="flexContainer">
        <div id="productsList" className="scrollable">
          <h2>Products</h2>
          <Link to='/admin/products/add'><button>Add Product</button></Link>
          {products.map((product) => {
            return <ProductRow key={product.id} product={product} />
          })}
          </div>
          <Switch>
          <Route path='/admin/products/add' exact component = {AddProduct} />
           <Route path='/admin/products/:productId' exact component = {AdminProduct} />
           </Switch>
        </div>
      );
    } else {
      return <div>No Products</div>;
    }
  }
}

const mapState = (state) => ({ products: state.products });

const mapDispatch = (dispatch) => {
  return {
    fetchProducts: () => dispatch(getProducts()),
  };
};

export default connect(mapState, mapDispatch)(ProductManagement);
