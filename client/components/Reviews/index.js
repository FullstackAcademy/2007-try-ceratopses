import React from 'react'
import { connect } from 'react-redux'
import { writeAReview } from '../../store/reviews'
import Axios from 'axios';

class Reviews extends React.Component {
    constructor() {
        super();
        this.state = {
          purchasedProduct: false,
          userId: null,
          productId: null
        };
        this.checkIfPurchased = this.checkIfPurchased.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    };

    componentDidMount(){
      this.checkIfPurchased()
    }

    async checkIfPurchased() {
      // const { reviews } = this.props
      const { user, product } = this.props
      const { reviews } = this.props.product
      if (user.email) { // user logged in
        let orders = (await Axios.get('/api/orders')).data
        console.log(orders)

        for (let i=0; i<orders.length; i++) {
          let currOrder = orders[i]
          if (currOrder.user.id === user.id) {
            let items = currOrder.orderItems
            for (let j=0; j<items.length; j++) {
              let currItem = items[j]
              if (currItem.productId === product.id) {
                this.setState({
                  purchasedProduct: true,
                  userId: user.id,
                  productId: product.id
                })
              }
            }
          }
        }
      }
    }

    async onSubmit (e) {
      e.preventDefault();
      let reviewTitle = document.getElementById("reviewTitle").value
      let rating = Number(document.getElementById("productRating").value)
      let fullReview = document.getElementById("reviewContent").value
      this.props.writeAReview({rating, reviewTitle, fullReview, userId: this.state.userId, productId: this.state.productId})
    }

    render() {
      //const { reviews } = this.props
      const { product, user } = this.props
      const {reviews} = this.props.product
      // user.orders.forEach(order => order.)
      if (this.state.purchasedProduct && reviews && reviews.length && reviews.length > 0) {
        return (
          <div id='productReviews'>
            <h3>Reviews for this product</h3>
            <form>
               Title: <textarea id = "reviewTitle" name = "reviewTitle" rows = "1" cols = "50"></textarea>
               <p></p>
               Rating: <select id = "productRating">
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
               </select>
               <p></p>
              Review: <textarea id = "reviewContent" name = "reviewContent" rows = "3" cols = "50">
                Your review goes here here
              </textarea>
              <p></p>
              <button type="submit" onClick={this.onSubmit}> Add Your Review </button>
            </form>
            <p></p>
            {reviews.map(review => {
              return (
                <div key={review.id}>
                  <ul>
                    <li><b>{review.reviewTitle}</b></li>
                    <li><i>{review.createdAt}</i></li>
                    <li>Rating: {review.rating}</li>
                    <li>{review.fullReview}</li>
                  </ul>
                </div>
              )
            })}
          </div>
        )
      }

      else if (reviews && reviews.length && reviews.length > 0) {
        return (
          <div id='productReviews'>
            <h3>Reviews for this product</h3>
            {reviews.map(review => {
              return (
                <div key={review.id}>
                  <ul>
                    <li><b>{review.reviewTitle}</b></li>
                    <li><i>{review.createdAt}</i></li>
                    <li>Rating: {review.rating}</li>
                    <li>{review.fullReview}</li>
                  </ul>
                </div>
              )
            })}
            {/* <ul>
              <li>Review 1: {reviews[0].reviewTitle}</li>
            </ul> */}
          </div>
        )
      }
      else {
        return (
          <div id='productReviews'>
            <h3>Reviews for this product</h3>
            <p>
              <li>There are no reviews for this product</li>
            </p>
          </div>
        )
      }
  };
}

const mapState = state => (
  {
    reviews: state.reviews,
    product: state.singleProduct,
    user: state.user
  }
)

const mapDispatch = (dispatch) => {
  return {
    writeAReview: (reviewObj) => dispatch(writeAReview(reviewObj))
  }
}

export default connect(mapState, mapDispatch)(Reviews);
