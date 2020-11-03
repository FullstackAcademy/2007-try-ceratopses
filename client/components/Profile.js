import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


class Profile extends React.Component {
    constructor() {
        super()
    };

    componentDidMount() {
    }

    render() {
      const {user} = this.props;
      if (user.email) {
        if (user.orders) {
          const {orders} = user.orders;
        }
        return (
          <div id = 'profile'>
            <h3>Your User Profile</h3>
            <ul>
              <li>Account created at: {user.createdAt}</li>
              <li>First name: {user.firstName}</li>
              <li>Last name: {user.lastName}</li>
            </ul>
            <h3>Your Oder History</h3>
            <ul>
              <li>Sample order - may need a separate component to show all orders and map over them</li>
            </ul>
          </div>
        )
      }
      else {
        return (
          <div id = 'profile'>
            <h1> Please <Link to='/signIn'>sign in</Link> or <Link to='/signUp'>register for an account</Link> to see your profile</h1>
          </div>
        )
      }
    };
}

const mapState = state => (
  {
    user: state.user
  }
)

const mapDispatch = (dispatch) => {
    return {
    }
}

export default connect(mapState, mapDispatch)(Profile);
