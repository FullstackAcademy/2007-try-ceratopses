import React from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../store/singleProduct'

class SingleProduct extends React.Component {
    constructor() {
        super()
    };

    componentDidMount(){
        this.props.getProduct(this.props.match.params.productId)
    }

    render() {
        const { product } = this.props
        if (product) {
            let categories = ''
            if (product.category) {
                categories = product.category.join(', ')
            }
            return (
                <div id='individualProducts'>
                    <h2>{product.title}</h2>
                    <div class='picture'>
                        <img src={product.photoUrl} className="singleProductImg" ></img>
                    </div>
                    <div class='details'>
                        <ul>
                            <li>Price: ${product.price}</li>
                            <li>Categories:
                                {categories}
                            </li>
                            <li>Description: {product.description}</li>
                            <li>Inventory: {product.inventory}</li>
                        </ul>
                        {/* //need to add functionality to below */}
                        <button>Add to Cart</button> 
                    </div>
                </div>
            )
        }
            return <div>Product Unavailable</div>
    };
}

const mapState = state => ( { product: state.singleProduct } )

const mapDispatch = (dispatch) => {
    return {
        getProduct: (productId) => dispatch(getProduct(productId))
    }
}

export default connect(mapState, mapDispatch)(SingleProduct);
