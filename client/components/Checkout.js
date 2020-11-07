import React from 'react';
import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js'
import { connect } from 'react-redux'
import axios from 'axios'

const stripePromise = loadStripe('pk_test_51HinadGDMs0I77f8ocyejVIDoUy8NVl8wkzcShs0RSm5vkIVTauh4ZoRDgKK558Xc1yeiSuSvvUwIPuiGqz1QbtB00S2zkLKtx')

class Checkout extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    async handleClick() {
        console.log(this.props)
        const stripe = await stripePromise;
        const response = await axios.post('/api/checkout/create-checkout-session', { cart: this.props.cart });
        console.log(response)
        const result = await stripe.redirectToCheckout({
            sessionId: response.data.id,
        });

        if (result.error) {
            alert(result.error.message)
        }
    }

    render() {
        return (
            <button role="link" onClick={this.handleClick}>
            Checkout
            </button>
        )
    }
}

const mapState = state => ( { cart: state.cart } )

export default connect (mapState)(Checkout)