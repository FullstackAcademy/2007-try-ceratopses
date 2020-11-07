import React from "react";
import { connect } from "react-redux";
import { deleteOrder, editOrder } from "../store/orders";
import { fetchOrder } from "../store/singleOrder";

class SingleOrder extends React.Component {
  constructor(props) {
    super();
    this.state = {status:""}
    this.deleteOrder = this.deleteOrder.bind(this)
    this.changeState = this.changeState.bind(this)
  }

  async componentDidMount() {
    try {
      await this.props.fetchOrder(this.props.match.params.orderId)
      const {status} = this.props.order
      this.setState({status})
    } catch (error) {
      console.log(error)
    }
  }

   //this is needed to make the component rerender when clicking on a new order, since the component doesn't unmount first
  async componentDidUpdate(prevProps) {
    if(prevProps.match.params.orderId!==this.props.match.params.orderId)
    {
      try {
       await this.props.fetchOrder(this.props.match.params.orderId)
      const {status} = this.props.order
      this.setState({status})
      } catch (error) {
        console.log(error)
      }

    }
  }

  deleteOrder(){
    this.props.deleteOrder(this.props.match.params.orderId)
    this.props.history.push('/admin/orders')
  }


  changeState(ev){
    this.setState({[ev.target.name]:ev.target.value})
    this.props.updateOrder(this.props.match.params.orderId, {[ev.target.name]:ev.target.value})
  }

  ///these should get split into components
  render() {
    const {order} =this.props
    const {address, orderItems, status } = order;
    const statuses = ["inCart", "created", "processing", "canceled", "completed"]
    const date = new Date(order.orderedAt).toDateString()
    if(JSON.stringify(order)==='{}'){
      return <p>Loading</p>
    }
    else return (
      <div id="singleOrder" className="flexContainer">
        <div id="orderDetails" className="card scrollable">
        <h2>Order Details</h2>
            <strong>Ordered at: {date}</strong>
            <div>
            <label htmlFor="status">Status: </label>
            <select name="status"  onChange={(ev) => this.changeState(ev)}>
              {statuses.map(statusOption => <option key={statusOption} name={statusOption} selected ={ status===statusOption ? "selected" : ""}>{statusOption}</option>)}
            </select>
            </div>
            {orderItems.map(item => {
              return (
                <div key={item.id}>
                  <h5>Item: {item.product.title}</h5>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ${item.subtotal.toFixed(2)}</p>
                </div>
              )
            })
            }
            <hr />
            <p>Sales tax: ${order.salesTax}</p>
            <p>Shipping: ${order.shipping}</p>
            <p>Grand Total: ${order.grandTotal.toFixed(2)}</p>
            </div>
            <div id="address" className="card">
            <h2>Ship to</h2>
            <p>Building: {address.buildingNumber}</p>
            <p>Street: {address.street}</p>
            <p>Unit: {address.unitNumber}</p>
            <p>City: {address.city}</p>
            <p>State: {address.state}</p>
            <p>Zip: {address.zip}</p>
            <p>Phone number: {address.phone}</p>
            </div>
            </div>
          )
        }
      }

const mapState = (state) => ({ order: state.singleOrder });

const mapDispatch = (dispatch) => ( {
    fetchOrder: (orderId) => dispatch(fetchOrder(orderId)),
    deleteOrder: (orderId) => dispatch(deleteOrder(orderId)),
    updateOrder: (orderId, status) => dispatch(editOrder(orderId, status))
  }
)

export default connect(mapState, mapDispatch)(SingleOrder);
