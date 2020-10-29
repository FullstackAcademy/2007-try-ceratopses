import React from "react";
import { connect } from "react-redux";
import UserRow from "./UserRow"
import { fetchUsers } from "../store/store"; //may change if store is broken out

class UserManagement extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    if (users.length !== 0) {
      return (
        <div id="usersPanel">
          {users.map((user) => {
            return <UserRow key={user.id} user={user} />
          })}
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
