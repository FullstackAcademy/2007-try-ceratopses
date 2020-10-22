import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import { getProduct } from '../store/store' //may change if store is broken out


class SingleProduct extends React.Component {
    constructor() {
        super()
    };

    componentDidMount(){
        this.props.getProduct(this.props.match.params.productId)
    }

    render() {
        const { product } = this.props
        if (product) {
            return (
                <div id='individualProducts'>
                    <img src={product.photo_url}></img>
                    <ul>
                        <li>{product.title}</li>
                        <li>{product.price}</li>
                        <li>{product.category}</li>
                        <li>{product.light_requirement}</li>
                        <li>{product.water_requirement}</li>
                        <li>{product.description}</li>
                        <li>{product.inventory}</li>
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

const mapState = state => ( { product: state.product } )

const mapDispatch = (dispatch) => {
    return {
        getProduct: (productId) => dispatch(getProduct(productId))
    }
}

export default connect(mapState, mapDispatch)(SingleProduct);