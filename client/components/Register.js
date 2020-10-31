import React from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../store/user'



class Register extends React.Component {
    constructor() {
      super()
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      };
      this.onSubmit = this.onSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
    };

    onChange (e) {
      console.log('target is', e.target.name, 'value is', e.target.value)
      this.setState({
        [e.target.name]: e.target.value
      })
      console.log(this.state)
    }

    async onSubmit (e) {
      e.preventDefault();
      console.log('current state in Registration is: ',this.state)
      const {firstName, lastName, email, password} = this.state
      this.props.registerUser(firstName, lastName, email, password)
      console.log('user in the store is now ', this.props.user)
      // const {email, password} = this.state
      // let response = (await axios.post('/api/sessions/login', {
      //   email,
      //   password
      // })).data
      // console.log('response from post req is: ', response)
    }

    componentDidMount() {
    }

    render() {
      const {user} = this.props
      if (user.email) {
        return (
          <div id='alreadyRegistered'>
            <h3>You are already logged in</h3>
          </div>
        )
      }
      else {
        return (
            <div id='registrationForm'>
                <h3>Content for the registration page will go here </h3>
                <form>
                        First Name: <input name = "firstName" type="textbox" onChange={this.onChange}></input>
                        <p></p>
                        Last Name: <input name = "lastName" type="textbox" onChange={this.onChange}></input>
                        <p></p>
                        Email: <input name = "email" type="textbox" onChange={this.onChange}></input>
                        <p></p>
                        Password: <input name = "password" type="password" onChange={this.onChange}></input>
                        <p></p>
                        <button type="submit" onClick={this.onSubmit}>Register</button>
                </form>
            </div>
        )
      };
    }
  }

const mapState = state => (
  {
    user: state.user
  }
)

const mapDispatch = (dispatch) => {
    return {
      registerUser: (firstName, lastName, email, password) => dispatch(registerUser(firstName, lastName, email, password))
    }
}


export default connect(mapState, mapDispatch)(Register);
