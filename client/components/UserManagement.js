import React from "react";
import {Route, Switch, Link} from 'react-router-dom'
import { connect } from "react-redux";
import UserRow from "./UserRow"
import { fetchUsers } from "../store/users";
import SingleUser from './SingleUser';
import AddUser from './AddUser';

class UserManagement extends React.Component {
  constructor(props) {
    super();
  }

 async componentDidMount() {
    await this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    if (users.length !== 0) {
      return (
        <div id="usersPanel" className="flexContainer">
        <div id="usersList" className="scrollable">
          <h2>Registered Users</h2>
          <Link to='/admin/users/add'><button>Add User</button></Link>
          {users.map((user) => {
            return <UserRow key={user.id} user={user} />
          })}
          </div>
          <Switch>
          <Route path='/admin/users/add' exact component = {AddUser} />
           <Route path='/admin/users/:userId' exact component = {SingleUser} />
           </Switch>
        </div>
      );
    } else {
      return <div>No Users</div>;
    }
  }
}

const mapState = (state) => ({ users: state.users });

const mapDispatch = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapState, mapDispatch)(UserManagement);
