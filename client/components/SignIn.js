import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import { getProducts } from '../store/store'
import axios from 'axios'




class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
          username: '',
          password: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    };

    onChange (e) {
      console.log('target is', e.target.name, 'value is', e.target.value)
      this.setState({[e.target.name]: e.target.value})
      console.log(this.state)
    }

    onSubmit (e) {
      e.preventDefault();
      console.log('current state in SignIn is: ',this.state)
      const {username, password} = this.state
      let response = axios.post('/api/sessions/login', {
        username,
        password
      })
      console.log('response from post req is: ', response)
    }

    componentDidMount() {
      //
    }

    render() {
            return (
                <div id='signInForm'>
                    <h3>Don't have an account? Register <Link to = "/register">here</Link></h3>
                    <form>
                      Username: <input name = "username" type="textbox" onChange={this.onChange}></input>
                      <p></p>
                      Password: <input name = "password" type="password" onChange={this.onChange}></input>
                      <p></p>
                      <button type="submit" onClick={this.onSubmit}>Sign In</button>
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
