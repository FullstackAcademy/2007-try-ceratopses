import React from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../../store/user'
import {
  SignUpContainer,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormText,
  FormButton,
} from './SignUpElements'


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
      let {firstName, lastName, email, password} = this.state
      email = email.toLowerCase()
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
          <>
            <SignUpContainer>
              <FormWrap>
                <Icon to="/">Florita</Icon>
                <FormContent>
                  <Form action="#">
                        <FormH1>Registration Form </FormH1>
                          <FormLabel htmlFor="for">First Name: </FormLabel>
                          <FormInput type="firstName" name = "firstName" onChange={this.onChange} />
                          <FormLabel htmlFor="for">Last Name: </FormLabel>
                          <FormInput type="lastName" name = "lastName" onChange={this.onChange} />
                          <FormLabel htmlFor="for">Email: </FormLabel>
                          <FormInput type="email" name = "email" onChange={this.onChange} />
                          <FormLabel htmlFor="for">Password: </FormLabel>
                          <FormInput type="password" name = "password" onChange={this.onChange} />
                          <FormButton type="submit" onClick={this.onSubmit}>Register</FormButton>
                          <FormText>
                            You will get a confirmation email to confirm enrollment
                          </FormText>
                  </Form>
                </FormContent>
              </FormWrap>
            </SignUpContainer>
          </>
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
