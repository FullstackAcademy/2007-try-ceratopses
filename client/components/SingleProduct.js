import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getProduct } from '../store/singleProduct'
import { fetcUserCart, createNewCart } from '../store/userCart'
import Reviews from './Reviews/index'
import axios from 'axios'

class SingleProduct extends React.Component {
    constructor() {
        super()
        this.onAddToCart = this.onAddToCart.bind(this)
    };

    onAddToCart (e) {
        e.preventDefault();
        console.log('user id is: ', this.props.user.id)
        console.log('window location is: ', window.location)
        if (this.props.user.id) { // user signed in
            // if user does not have a cart: create a new cart record, update cart in state (through thunk), and add a product to that cart
            if (this.props.cart.length === 0) {
                this.props.createNewCart(this.props.user.id)
            }
            // if user has a cart : check if that product is in the cart already, if yes, +1, otherwise, add it to the cart as a new product record
            else {

            }

            //this.props.getUserCart(this.props.user.id)
        }
        else {
            window.location.href='/#/signIn'
        }
        // console.log('user id is: ', this.props.user.id)
        // if (this.props.user.id) {
        //     this.props.getUserCart(this.props.userId)
        // }
        // else {
        //     <Redirect to ='/' />
        // }
        //this.props.getUserCart(this.props.userId)
    }

    componentDidMount(){
        this.props.getProduct(this.props.match.params.productId)
        this.props.getUserCart(this.props.user.id)
    }

    render() {
        const { product, user } = this.props
        if (product) {
            let categories = ''
            if (product.category) {
                categories = product.category.join(', ')
            }
            return (
                <div id='individualProducts'>
                    <h2>{product.title}</h2>
                    <div class='picture'>
                        <img src={product.photoUrl} className="singleProductImg" ></img>
                    </div>
                    <div class='details'>
                        <ul>
                            <li>Price: ${product.price}</li>
                            <li>Categories:
                                {categories}
                            </li>
                            <li>Description: {product.description}</li>
                            <li>Inventory: {product.inventory}</li>
                        </ul>
                        {/* //need to add functionality to below */}
                        <button type = "submit" onClick={this.onAddToCart}>Add to Cart</button>
                    </div>
                    <Reviews />
                </div>
            )
        }
            return <div>Product Unavailable</div>
    };
}

const mapState = state => ({
    product: state.singleProduct,
    user: state.user,
    cart: state.cart
})

const mapDispatch = (dispatch) => {
    return {
        getProduct: (productId) => dispatch(getProduct(productId)),
        getUserCart: (userId) => dispatch(fetcUserCart(userId)),
        createNewCart: (userId) => dispatch(createNewCart(userId))
    }
}

export default connect(mapState, mapDispatch)(SingleProduct);
