import React from 'react'
import {connect} from 'react-redux'
import {addProduct} from '../store/products'

class AddProduct extends React.Component{
constructor(){
  super();
  this.state = {title:"", photoUrl:"", price:0, category:[], tags:"", lightRequirement:"na", description:"", inventory:0}
  this.changeState=this.changeState.bind(this)
  this.submit=this.submit.bind(this)
}

changeState(ev){
 this.setState({[ev.target.name]: ev.target.value})
}

submit(ev){
  ev.preventDefault()
  this.props.addProduct(this.state)
}

render(){

  const {title, photoUrl, price, category, tags, lightRequirement, description, inventory} = this.state
  const lightRequirements = ["full sun" , "bright light", "partial shade", "shade", "na"]

  return (

<div id="addProductPanel" className="flexColumn">
          <h2>Add New Product</h2>
          <form className="flexColumn scrollable">
            <label htmlFor="title">Title:</label>
            <input name="title" onChange={(ev) =>this.changeState(ev)}></input>
            <label htmlFor="photoUrl">Photo URL:</label>
            <input name="photoUrl" onChange={(ev) =>this.changeState(ev)}></input>
            <label htmlFor="price">Price:</label>
            <input name="price" onChange={(ev) =>this.changeState(ev)}></input>
            <label htmlFor="category">Category:</label>
            <input name="category" onChange={(ev) =>this.changeState(ev)}></input>
            <label htmlFor="tags">Tags:</label>
            <input name="tags" onChange={(ev) =>this.changeState(ev)}></input>
            <label htmlFor="lightRequirement">Light Requirement:</label>
            <select name="lightRequirement" onChange={(ev) =>this.changeState(ev)}>
            {lightRequirements.map(lightOption => <option key={lightOption} name={lightOption} selected ={ lightRequirement===lightOption ? "selected" : ""}>{lightOption}</option>)}
            </select>
            <label htmlFor="description">Description:</label>
            <textarea name="description" onChange={(ev) =>this.changeState(ev)}></textarea>
            <label htmlFor="inventory">Inventory:</label>
            <input name="inventory" onChange={(ev) =>this.changeState(ev)}></input>
          </form>
        <button type='submit' onClick={(ev)=>this.submit(ev)}>Add Product</button>
      </div>

)
  }
}

const mapDispatch = (dispatch) => ({addProduct: (product) => dispatch(addProduct(product))})

export default connect(null,mapDispatch)(AddProduct)
