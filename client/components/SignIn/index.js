import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../store/user';
import {
  SignInContainer,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormText,
  FormLinkP,
  FormButton,
} from './SignInElements';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log('target is', e.target.name, 'value is', e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  }

  async onSubmit(e) {
    e.preventDefault();
    console.log('current state in SignIn is: ', this.state);
    let { email, password } = this.state;
    email = email.toLowerCase();
    this.props.getUser(email, password);
  }

  componentDidMount() {
    //
  }

  render() {
    const { user } = this.props;
    if (user.email) {
      console.log('user in the store is now ', this.props.user);
      return <h4>Welcome {this.props.user.email}, you are logged in</h4>;
    } else {
      return (
        <>
          <SignInContainer>
            <FormWrap>
              <Icon to="/">Florita</Icon>
              <FormContent>
                <Form action="#">
                  <FormH1>
                    Don't have an account? Register{' '}
                    <FormLinkP to="/register">here</FormLinkP>
                  </FormH1>
                  <FormLabel htmlFor="for">Email:</FormLabel>
                  <FormInput
                    type="email"
                    name="email"
                    onChange={this.onChange}
                  />
                  <FormLabel htmlFor="for">Password:</FormLabel>
                  <FormInput
                    type="password"
                    name="password"
                    onChange={this.onChange}
                  />
                  <FormButton type="submit" onClick={this.onSubmit}>
                    Sign In
                  </FormButton>
                </Form>
              </FormContent>
            </FormWrap>
          </SignInContainer>
        </>
      );
    }
  }
}

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => {
  return {
    getUser: (email, password) => dispatch(getUser(email, password)),
  };
};

export default connect(mapState, mapDispatch)(SignIn);
