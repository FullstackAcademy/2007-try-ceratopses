import React from "react";
import { connect } from "react-redux";
import EditProfile from './EditProfile'
import { editProfile } from "../../store/user";


class ProfileDetails extends React.Component {
  constructor(props) {
    super();
    const {firstName, lastName, email} = props.user
    this.state = {firstName, lastName, email}
    this.deleteUser = this.deleteUser.bind(this)
    this.updateProfile= this.updateProfile.bind(this)
    this.changeState = this.changeState.bind(this)
  }


  deleteUser(){
    this.props.deleteUser(this.props.user.id)
    this.props.history.push('/')
  }

  updateProfile(ev){
    ev.preventDefault();
    this.props.updateUser(this.props.user.id, this.state)
  }

  changeState(ev){
    this.setState({[ev.target.name]:ev.target.value})
  }

  ///these should get split into components
  render() {
    console.log("USER OBJECT", this.props.user)
    const {orders, reviews } = this.props.user;

      return (
        <div id="singleUser" className="flexContainer">
        <EditProfile {...this.state} deleteUser={this.deleteUser} updateProfile ={this.updateProfile} change={this.changeState}/>
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


const mapState = (state) => ({ user: state.user });

const mapDispatch = (dispatch) => ( {
    deleteUser: (userId) => dispatch(deleteUser(userId)),
    updateUser: (userId, userProfile) => dispatch(editProfile(userId, userProfile))
  }
)

export default connect(mapState, mapDispatch)(ProfileDetails);
