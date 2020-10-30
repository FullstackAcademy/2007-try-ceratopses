import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import CategoriesDropdown from './Dropdown'

class NavBar extends React.Component {
    constructor() {
        super()
    }

    render() {
        const {user} = this.props
        if (user.email) {
            return (
                <div id ='navbar'>
                         <Router>
                            <ul id='navbar'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/products'>All Products</Link></li>
                                {/* {CategoriesDropdown component is working but has few bugs. uncomment it below to its function}
                                to navigation categories, for now just go to home page */}
                                {/* <li><CategoriesDropdown /></li> */}
                                <li><Link to='/about-us'>About Us</Link></li>
                                <li><Link to='/cart'>Cart</Link></li>
                                <li><Link to='/profile'>Profile</Link></li>
                                <li><Link to='/logout'>Log Out</Link></li>
                            </ul>
                        </Router>
                </div>
            )
        }
        else {
            return (
                <div id ='navbar'>
                        <Router>
                            <ul id='navbar'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/products'>All Products</Link></li>
                                {/* {CategoriesDropdown component is working but has few bugs. uncomment it below to its function}
                                to navigation categories, for now just go to home page */}
                                {/* <li><CategoriesDropdown /></li> */}
                                <li><Link to='/about-us'>About Us</Link></li>
                                <li><Link to='/cart'>Cart</Link></li>
                                <li><Link to='/profile'>Profile</Link></li>
                                <li><Link to='/signIn'>Sign In</Link></li>
                                <li><Link to='/register'>Register</Link></li>
                            </ul>
                        </Router>
                </div>
            )
        }
    }
}

const mapState = state => {
    return {
        user: state.user
    }
};

const mapDispatch = (dispatch) => {
    return {

    }
};

export default connect(mapState, mapDispatch)(NavBar)
