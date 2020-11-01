import React from "react";
import { connect } from "react-redux";
import { fetchUser, deleteUser } from "../store/store"; //may change if store is broken out

class SingleUser extends React.Component {
  constructor(props) {
    super();
    this.deleteUser = this.deleteUser.bind(this)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
  }

   //this is needed to make the component rerender when clicking on a new user, since the component doesn't unmount first
  componentDidUpdate(prevProps) {
    if(prevProps.match.params.userId!==this.props.match.params.userId)
    {
      this.props.fetchUser(this.props.match.params.userId)
    }
  }

  deleteUser(){
    this.props.deleteUser(this.props.match.params.userId)
    this.props.history.push('/admin/users')
  }

  ///these should get split into components
  render() {
    const { firstName, lastName, email, admin, orders, reviews } = this.props.user;

      return (
        <div id="singleUser" className="flexContainer">
        <div id="editUserPanel">
          <h2>Edit User {firstName} {lastName}</h2>
          <form>
            <label htmlFor="firstName">First Name:</label>
            <input name="firstName"></input>
            <label htmlFor="lastName">Last Name:</label>
            <input name="lastName"></input>
            <label htmlFor="email">E-Mail:</label>
            <input name="email"></input>
            <label htmlFor="admin">Grant Admin Rights?</label>
            <select name="admin">
              <option name="true">Yes</option>
              <option name="false">No</option>
            </select>
          </form>
        <button onClick={()=>this.deleteUser()}>Delete User</button>
        <button>Reset Password</button>
      </div>
      <div id="orderHistory">
        <h2>Order History</h2>
        {!orders ? "No orders" : orders.map(order=>{
          const {address} = order
          return(
            <div key={order.id} className="orderDetails">
            <p>Status: {order.status}</p>
            <p>Ordered at: {order.orderedAt}</p>
            <p>Sales tax: ${order.salesTax}</p>
            <p>Shipping: ${order.shipping}</p>
            <p>Grand Total: ${order.grandTotal}</p>
            <p>Phone number: {address.phone}</p>
            <strong>Ship to</strong>
            <p>Building: {address.buildingNumber}</p>
            <p>Street: {address.street}</p>
            <p>Unit: {address.unitNumber}</p>
            <p>City: {address.city}</p>
            <p>State: {address.state}</p>
            <p>Zip: {address.zip}</p>

            </div>
          )
        })}
      </div>
      <div id="reviewHistory">
        <h2>Review History</h2>
        {!reviews ? "No reviews" : reviews.map(review=>{
          return(
            <div key={review.id} className="reviewDetails">
            <h5>Product: {review.product.title}</h5>
            <p>Reviewed at: {review.createdAt}</p>
            <p>Rating: {review.rating}</p>
            <p>Title: {review.reviewTitle}</p>
            <p>Text: {review.fullReview}</p>
            </div>
          )
        })}
      </div>
      </div>
      );
    }
  }


const mapState = (state) => ({ user: state.singleUser });

const mapDispatch = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    deleteUser: (userId) => dispatch(deleteUser(userId))
  };
};

export default connect(mapState, mapDispatch)(SingleUser);
