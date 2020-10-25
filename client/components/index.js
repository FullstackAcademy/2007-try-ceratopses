import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import Profile from './Profile'
import Home from './Home'

class NavBar extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Router>
                <Route path="/" exact component = {Home} />
                <Route path="/profile" exact component = {Profile} />
                {/* <Link to="/">Home Link</Link>
                <Link to="/profile">Profile Link</Link> */}
                {/* <Route path='/signin' exact />
                <Route path='/signup' exact />
                <Route path='/aboutus' exact />
                <Route path='/cart' exact /> */}
                {/* the below two routes may need to be outside of navbar component */}
                {/* <Route path='/categories/:category' exact />
                <Route path='/products/:productId' exact /> */}
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
