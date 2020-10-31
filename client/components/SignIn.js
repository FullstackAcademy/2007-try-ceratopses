import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../store/user";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loggedIn: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log("target is", e.target.name, "value is", e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
    // this.props.updateForm(e.target.name, e.target.value)
    console.log(this.state);
  }

  async onSubmit(e) {
    e.preventDefault();
    console.log("current state in SignIn is: ", this.state);
    const { email, password } = this.state;
    this.props.getUser(email, password);
    console.log("user in the store is now ", this.props.user);
    // const {email, password} = this.state
    // let response = (await axios.post('/api/sessions/login', {
    //   email,
    //   password
    // })).data
    // console.log('response from post req is: ', response)
  }

  componentDidMount() {
    //
  }

  render() {
    const { user } = this.props;
    if (user.email) {
      return <h4>Welcome {this.props.user.email}, you are logged in</h4>;
    } else {
      return (
        <div id="signInForm">
          <h1>{this.props.user.email}</h1>
          <h3>
            Don't have an account? Register <Link to="/register">here</Link>
          </h3>
          <form>
            Email:{" "}
            <input name="email" type="textbox" onChange={this.onChange}></input>
            <p></p>
            Password:{" "}
            <input
              name="password"
              type="password"
              onChange={this.onChange}
            ></input>
            <p></p>
            <button type="submit" onClick={this.onSubmit}>
              Sign In
            </button>
          </form>
        </div>
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
