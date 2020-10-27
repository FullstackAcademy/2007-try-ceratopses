import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import { getProducts } from '../store/store'




class Register extends React.Component {
    constructor() {
        super()
    };

    componentDidMount() {
      //
    }

    render() {
            return (
                <div id='registrationForm'>
                    <h3>Content for the registration page will go here </h3>
                </div>
            )
    };
}

const mapState = state => (
  {
    // products: state.products, category: state.singleCategory
  }
)


const mapDispatch = (dispatch) => {
    return {
        // getProducts: (category) => dispatch(getProducts(category)),
    }
}


export default connect(mapState, mapDispatch)(Register);
