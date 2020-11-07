import React from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order }) => {

  const date = new Date(order.orderedAt).toDateString()

  return (
    <Link to={`/admin/orders/${order.id}`}>
      <div className="card">
        <h4>Order {order.id}</h4>
        <p>
          Name: {order.address.firstName} {order.address.lastName}
        </p>
        <p>Ordered at: {date}</p>
        <p>Status: {order.status}</p>
        <p>Total: ${order.grandTotal} </p>
      </div>
    </Link>
  );
};

export default OrderRow;
