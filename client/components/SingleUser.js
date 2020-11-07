import React from "react";
import { connect } from "react-redux";
import EditUser from './EditUser'
import { deleteUser, editUser } from "../store/users";
import { fetchUser } from "../store/singleUser";

class SingleUser extends React.Component {
  constructor(props) {
    super();
    this.state = {firstName:'', lastName:'', email: '', admin:false}
    this.deleteUser = this.deleteUser.bind(this)
    this.updateProfile= this.updateProfile.bind(this)
    this.changeState = this.changeState.bind(this)
  }

  async componentDidMount() {
    try {
      await this.props.fetchUser(this.props.match.params.userId)
      const {firstName, lastName, email, admin} = this.props.user
      this.setState({firstName, lastName, email, admin})
    } catch (error) {
      console.log(error)
    }
  }

   //this is needed to make the component rerender when clicking on a new user, since the component doesn't unmount first
  async componentDidUpdate(prevProps) {
    if(prevProps.match.params.userId!==this.props.match.params.userId)
    {
      try {
       await this.props.fetchUser(this.props.match.params.userId)
      const {firstName, lastName, email, admin} = this.props.user
      this.setState({firstName, lastName, email, admin})
      } catch (error) {
        console.log(error)
      }

    }
  }

  deleteUser(){
    this.props.deleteUser(this.props.match.params.userId)
    this.props.history.push('/admin/users')
  }

  updateProfile(ev){
    ev.preventDefault();
    this.props.updateUser(this.props.match.params.userId, this.state)
  }

  changeState(ev){
    this.setState({[ev.target.name]:ev.target.value})
  }

  ///these should get split into components
  render() {
    const {orders, reviews } = this.props.user;
    console.log(orders)

      return (
        <div id="singleUser" className="flexContainer">
        <EditUser {...this.state} deleteUser={this.deleteUser} updateProfile ={this.updateProfile} change={this.changeState}/>
      <div id="orderHistory" className="scrollable">
        <h2>Order History</h2>
        {!orders ? "No orders" : orders.map(order=>{
          const {address} = order
          const date = new Date(order.orderedAt).toDateString();
          return(
            <div key={order.id} className="card">
            <strong>Ordered at: {date}</strong>
            <p>Status: {order.status}</p>
            {order.orderItems.map(item => {
              return (
                <div key={item.id}>
                  <h5>Item: {item.product.title}</h5>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ${item.subtotal}</p>
                </div>
              )
            })
            }
            <hr />
            <p>Sales tax: ${order.salesTax}</p>
            <p>Shipping: ${order.shipping}</p>
            <p>Grand Total: ${order.grandTotal}</p>

            <h5>Ship to</h5>
            <p>Building: {address.buildingNumber}</p>
            <p>Street: {address.street}</p>
            <p>Unit: {address.unitNumber}</p>
            <p>City: {address.city}</p>
            <p>State: {address.state}</p>
            <p>Zip: {address.zip}</p>
            <p>Phone number: {address.phone}</p>

            </div>
          )
        })}
      </div>
      <div id="reviewHistory" className="scrollable">
        <h2>Review History</h2>
        {!reviews ? "No reviews" : reviews.map(review=>{
          const date = new Date(review.createdAt).toDateString()
          return(
            <div key={review.id} className="card">
            <h5>Product: {review.product.title}</h5>
            <p>Reviewed at: {date}</p>
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

const mapDispatch = (dispatch) => ( {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    deleteUser: (userId) => dispatch(deleteUser(userId)),
    updateUser: (userId, userProfile) => dispatch(editUser(userId, userProfile))
  }
)

export default connect(mapState, mapDispatch)(SingleUser);
