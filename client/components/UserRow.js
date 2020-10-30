import React from "react";
import { Link } from "react-router-dom";

const UserRow = ({ user }) => {
  return (
    <Link to={`/admin/users/${user.id}`}>
      <div className="userRow">
        <h4>User {user.id}</h4>
        <p>
          Name: {user.firstName} {user.lastName}
        </p>
        <p>Email: {user.email}</p>
        <p>Admin: {user.admin ? "Yes" : "No"}</p>
        <p>
          Open Orders: {
            user.orders.filter(
              (order) =>
                order.status === "created" || order.status === "processing"
            ).length
          }
        </p>
      </div>
    </Link>
  );
};

export default UserRow;
