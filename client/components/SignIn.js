import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import { getProducts } from '../store/store'




class SignIn extends React.Component {
    constructor() {
        super()
    };

    componentDidMount() {
      //
    }

    render() {
            return (
                <div id='signInForm'>
                    <h3>Don't have an account? Register <Link to = "/register">here</Link></h3>
                    <form>
                      Username: <input id = "username" type="textbox"></input>
                      <p></p>
                      Password: <input id = "password" type="password"></input>
                      <p></p>
                      <button type="submit" onClick={() => console.log(document.getElementById('username').value, document.getElementById('password').value)}>Sign In</button>
                    </form>
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


export default connect(mapState, mapDispatch)(SignIn);
