import React from "react";
import {Route, Switch, Link} from 'react-router-dom'
import { connect } from "react-redux";
import OrderRow from "./OrderRow"
import { fetchOrders } from "../store/orders";
import SingleOrder from './SingleOrder';


class OrderManagement extends React.Component {
  constructor(props) {
    super();
  }

 async componentDidMount() {
    await this.props.fetchOrders();
  }

  render() {
    const { orders } = this.props;
    if (orders.length !== 0) {
      return (
        <div id="ordersPanel" className="flexContainer">
        <div id="ordersList" className="scrollable">
          <h2>Orders</h2>
          {orders.map((order) => {
            return <OrderRow key={order.id} order={order} />
          })}
          </div>
          <Switch>
           <Route path='/admin/orders/:orderId' exact component = {SingleOrder} />
           </Switch>
        </div>
      );
    } else {
      return <div>No Orders</div>;
    }
  }
}

const mapState = (state) => ({ orders: state.orders });

const mapDispatch = (dispatch) => {
  return {
    fetchOrders: () => dispatch(fetchOrders()),
  };
};

export default connect(mapState, mapDispatch)(OrderManagement);
