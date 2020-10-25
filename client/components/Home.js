import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import Categories from './Categories'
import { getCategories } from '../store/store' //may change if store is broken out
import CategoryProducts from './CategoryProducts'
import SingleProduct from './SingleProduct'

class App extends React.Component {
    constructor() {
        super()
    };

    componentDidMount() {
        this.props.getCategories()
    };

    render() {
        return (
            <Router>
                <div id='home'>
                    <NavBar />
                    <Categories />
                    <Footer />
                </div>
                <Route path='/' exact />
                <Route path='/categories/:category' exact /> 
                <Route path='/products/' exact component={CategoryProducts}/> 
                <Route path='/products/:productId' component = { SingleProduct }/> 
                <Route path='/profile' exact />
                <Route path='/sign-in' exact />
                <Route path='/register' exact />
            </Router>
        )
    };
}

const mapDispatch = (dispatch) => {
    return {
        getCategories: () => dispatch(getCategories())
    }
}

export default connect(null, mapDispatch)(App);