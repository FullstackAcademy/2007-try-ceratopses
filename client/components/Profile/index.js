import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import ProfileDetails from './ProfileDetails'


class Profile extends React.Component {
    constructor() {
        super()
    };

    componentDidMount() {
    }

    render() {
      const {user} = this.props;
      if(user){
        return (
         <ProfileDetails />
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
