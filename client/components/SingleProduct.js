import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import { getProduct } from '../store/store' //may change if store is broken out


class SingleProduct extends React.Component {
    constructor() {
        super()
    };

    componentDidMount(){
        console.log(this.props)
        this.props.getProduct(this.props.match.params.productId)
    }

    render() {
        const { product } = this.props
        if (product) {
            return (
                <div id='individualProducts'>
                    <img src={product.photo_url}></img>
                    <ul>
                        <li>Name: {product.title}</li>
                        <li>Proce: {product.price}</li>
                        <li>Categories: {product.category}</li>
                        <li>Light Requirement: {product.light_requirement}</li>
                        <li>Description: {product.description}</li>
                        <li>Inventory: {product.inventory}</li>
                        <li>{product.status}</li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    No Product
                </div>
            )
        }
    };
}

const mapState = state => ( { product: state.singleProduct } )

const mapDispatch = (dispatch) => {
    return {
        getProduct: (productId) => dispatch(getProduct(productId))
    }
}

export default connect(mapState, mapDispatch)(SingleProduct);