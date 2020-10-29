import React from "react";
import {Link} from "react-router-dom"

const UserRow = ({ user }) => {
  return (
    <div className="userRow">
      <Link to={`/admin/users/${user.id}`}><h4>User {user.id}</h4></Link>
      <div className="flexContainer">
        <div className="leftContainer">
          <p>
            Name: {user.firstName} {user.lastName}
          </p>
          <p>Email: {user.email}</p>
          <p>Admin: {user.admin ? "Yes" : "No"}</p>
          <p>
            Open Orders: {user.orders.filter((order) => order.status === "created").length}
          </p>
        </div>
        <div className="rightContainer">
          <button>Promote</button>
          <button>Delete User</button>
          <button>Reset Password</button>
        </div>
      </div>
    </div>
  );
};

export default UserRow
