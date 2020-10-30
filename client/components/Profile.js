import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
//import { getProduct } from '../store/store' //may change if store is broken out


class Profile extends React.Component {
    constructor() {
        super()
    };

    componentDidMount(){
        // this.props.getProduct(this.props.match.params.productId)
    }

    render() {
      return (
        <div id = 'profile'>
          <h1> Profile page content goes here - testing component</h1>
        </div>
      )

       
    };
}

const mapState = state => ( { product: state.product } )

const mapDispatch = (dispatch) => {
    return {
        // getProduct: (productId) => dispatch(getProduct(productId))
    }
}

export default connect(mapState, mapDispatch)(Profile);
