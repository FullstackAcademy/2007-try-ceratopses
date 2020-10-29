import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import { getProducts } from '../store/store'




class CategoryProducts extends React.Component {
    constructor() {
        super()
    };

    componentDidMount() {
        if (!this.props.match.params.category) {
            this.props.getProducts('')
        } else {
            this.props.getProducts(this.props.match.params.category)
        }
    }

    render() {
        const { products } = this.props
        if (products) {
            return (
                <div id='categoryProducts'>
                    {
                        products.map(product => {
                            return (
                                <div key={product.id}>
                                    <Link to={`/products/${product.id}`}>
                                        <img src={product.photoUrl} className="productListImg"></img>
                                        <ul>
                                            <li>Name: {product.title}</li>
                                            <li>Price: ${product.price}</li>
                                            {/* add to cart button + quantity field */}
                                        </ul>
                                    </Link>
                                </div>
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

const mapState = state => ( { products: state.products, category: state.singleCategory } )


const mapDispatch = (dispatch) => {
    return {
        getProducts: (category) => dispatch(getProducts(category)),
    }
}


export default connect(mapState, mapDispatch)(CategoryProducts);
