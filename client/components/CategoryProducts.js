import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link, Route } from 'react-router-dom'



class CategoryProducts extends React.Component {
    constructor() {
        super()
    };

    render() {
        const { products } = this.props
        if (products) {
            return (
                <div id='categoryProducts'>
                    {
                        products.map(product => {
                            return (
                                <Link to={`/products/${product.id}`}>
                                    <div key={product.id}>
                                        <img src={product.photo_url}></img>
                                        <ul>
                                            <li>Name: {product.name}</li>
                                            <li>Price: {product.price}</li>
                                            {/* add to cart button + quantity field */}
                                        </ul>
                                    </div>
                                </Link>
                            )                        
                        })
                    }
                </div>
            )
        } else {
            return (
                <div>
                    No Products
                </div>
            )
        }
    };
}

const mapState = state => ( { products: state.products } )

export default connect(mapState)(CategoryProducts);