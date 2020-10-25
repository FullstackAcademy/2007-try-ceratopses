import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link, Route } from 'react-router-dom'

class NavBar extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        return (
            <Router>
                <div>
                    <ul id='navbar'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/products'>All Products</Link></li>
                        {/* {create dropdown for categories that also sets state to that category} */}
                        <li><Link to='/categories/:category'>Categories</Link></li>
                        <li><Link to='/about-us'>About Us</Link></li> 
                        <li><Link to='/cart'>Cart</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>
                        <li><Link to='/sign-in'>Sign In</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                    </ul>
                </div>
            </Router>
        )
    }
}

const mapState = state => { 
    return { }
};

const mapDispatch = (dispatch) => {
    return {

    }
};

export default connect(mapState, mapDispatch)(NavBar)