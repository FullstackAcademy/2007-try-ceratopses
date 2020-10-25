import React from 'react'
import { connect } from 'react-redux'
import {HashRouter as Router, Link } from 'react-router-dom'
import Profile from './Profile'

class NavBar extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            // <Router>
            //     <Route path='/' exact />
            //     {/* the below two routes may need to be outside of navbar component */}
            //     <Route path='/categories/:category' exact />
            //     <Route path='/products/:productId' exact />
            //     <Route path='/profile' component = {Profile} exact />
            //     <Route path='/signin' exact />
            //     <Route path='/signup' exact />
            //     <Route path='/aboutus' exact />
            //     <Route path='/cart' exact />

                <div id ='navbar'>
                     <Router>
                    <ul id='navbar'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        {/* {create dropdown for categories that also sets state to that category} */}
                        {/* <li><Link to='/categories/:category'>Categories</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/cart'>Cart</Link></li> */}
                        {/* <li><Link to='/signin'>Sign In</Link></li>
                        <li><Link to='/signup'>Register</Link></li> */}
                    </ul>
                    </Router>
                </div>
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
