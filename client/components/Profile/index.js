import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EditProfile from './EditProfile';
import { deleteUser, editProfile } from '../../store/user';

class Profile extends React.Component {
  constructor(props) {
    super();
    const { firstName, lastName, email } = props.user;
    this.state = { firstName, lastName, email };
    this.deleteUser = this.deleteUser.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {}

  async deleteUser() {
    await this.props.deleteUser(this.props.user.id);
    this.props.history.push('/');
  }

  updateProfile(ev) {
    ev.preventDefault();
    this.props.updateUser(this.props.user.id, this.state);
  }

  changeState(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  render() {
    const { user } = this.props;
    const { orders, reviews } = user;

    if (JSON.stringify(user) === '{}') {
      return (
        <div id="profile">
          <h1>
            {' '}
            Please <Link to="/signIn">sign in</Link> or{' '}
            <Link to="/signUp">register for an account</Link> to see your
            profile
          </h1>
        </div>
      );
    } else {
      return (
        <div id="singleUser" className="flexContainer">
          <EditProfile
            {...this.state}
            deleteUser={this.deleteUser}
            updateProfile={this.updateProfile}
            change={this.changeState}
          />
          <div id="orderHistory" className="scrollable">
            <h2>Order History</h2>
            {!orders
              ? 'No orders'
              : orders.map((order) => {
                  const { address } = order;
                  const date = new Date(order.orderedAt).toDateString();
                  return (
                    <div key={order.id} className="card">
                      <strong>Ordered at: {date}</strong>
                      <p>Status: {order.status}</p>
                      {order.orderItems.map((item) => {
                        return (
                          <div key={item.id}>
                            <h5>Item: {item.product.title}</h5>
                            <p>Quantity: {item.quantity}</p>
                            <p>Subtotal: ${item.subtotal}</p>
                          </div>
                        );
                      })}
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
                  );
                })}
          </div>
          <div id="reviewHistory" className="scrollable">
            <h2>Review History</h2>
            {!reviews
              ? 'No reviews'
              : reviews.map((review) => {
                  const date = new Date(review.createdAt).toDateString();
                  return (
                    <div key={review.id} className="card">
                      <h5>Product: {review.product.title}</h5>
                      <p>Reviewed at: {date}</p>
                      <p>Rating: {review.rating}</p>
                      <p>Title: {review.reviewTitle}</p>
                      <p>Text: {review.fullReview}</p>
                    </div>
                  );
                })}
          </div>
        </div>
      );
    }
  }
}

const mapState = (state) => ({ user: state.user });

const mapDispatch = (dispatch) => ({
  deleteUser: (userId) => dispatch(deleteUser(userId)),
  updateUser: (userId, userProfile) =>
    dispatch(editProfile(userId, userProfile)),
});

export default connect(mapState, mapDispatch)(Profile);
