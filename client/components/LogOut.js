import React from 'react'
import { connect } from 'react-redux'
import { logOutUser } from '../store/store'


class LogOut extends React.Component {
    constructor() {
        super()
        this.onClick = this.onClick.bind(this);
    };

    async onClick (e) {
      e.preventDefault();
      this.props.logOutUser()
    }

    componentDidMount() {
    }

    render() {
      const {user} = this.props;
      console.log(this.props)
      if (user.email) {
        return (
          <div id = 'logOut'>
            <button type="logOut" onClick={this.onClick}>Log Out</button>
          </div>
        )
      }
      else {
        return (
          <div id = 'logOut'>
            <h1> You are not logged in </h1>
          </div>
        )
      }
    };
}

const mapState = state => (
  {
    user: state.user,
    logOutUser: () => dispatch(logOutUser())
  }
)

const mapDispatch = (dispatch) => {
    return {
      logOutUser: () => dispatch({type: 'LOG_OUT'})
    }
}

export default connect(mapState, mapDispatch)(LogOut);
