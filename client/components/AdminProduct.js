import React from "react";
import { connect } from "react-redux";
import EditProduct from './EditProduct'
import { deleteProduct, editProduct } from "../store/products";
import { getProduct } from '../store/singleProduct';

class AdminProduct extends React.Component {
  constructor(props) {
    super();
    this.state = {title:"", photoUrl:"", price:0, category:"", tags:"", lightRequirement:"na", description:"", inventory:0}
    this.deleteProduct = this.deleteProduct.bind(this)
    this.updateProduct= this.updateProduct.bind(this)
    this.changeState = this.changeState.bind(this)
  }

  componentDidMount() {
    this.loadData();
  }

   //this is needed to make the component rerender when clicking on a new product, since the component doesn't unmount first
  componentDidUpdate(prevProps) {
    if(prevProps.match.params.productId!==this.props.match.params.productId)
    {
      this.loadData();

    }
  }

 async loadData(){
    try {
      await this.props.getProduct(this.props.match.params.productId)
      const {title, photoUrl, price, category, tags, lightRequirement, description, inventory} = this.props.product
      this.setState({title, photoUrl, price, category, tags, lightRequirement, description, inventory})
     } catch (error) {
       console.log(error)
     }
  }

  deleteProduct(){
    this.props.deleteProduct(this.props.match.params.productId)
    this.props.history.push('/admin/products')
  }

  updateProduct(ev){
    ev.preventDefault();
    this.props.updateProduct(this.props.match.params.productId, this.state)
  }

  changeState(ev){
    this.setState({[ev.target.name]:ev.target.value})
  }

  ///these should get split into components
  render() {
      return (
        <div id="adminProduct" className="flexContainer">
          <div class='picture'>
                        <img src={this.state.photoUrl} className="singleProductImg" ></img>
                    </div>
        <EditProduct {...this.state} deleteProduct={this.deleteProduct} updateProduct ={this.updateProduct} change={this.changeState}/>
      </div>

      );
    }
  }


const mapState = (state) => ({ product: state.singleProduct });

const mapDispatch = (dispatch) => ( {
    getProduct: (productId) => dispatch(getProduct(productId)),
    deleteProduct: (productId) => dispatch(deleteProduct(productId)),
    updateProduct: (productId, productData) => dispatch(editProduct(productId, productData))
  }
)

export default connect(mapState, mapDispatch)(AdminProduct);
