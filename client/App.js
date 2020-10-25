import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Categories from './components/Categories'
import CategoryProducts from './components/CategoryProducts'
import SingleProduct from './components/SingleProduct'


class App extends React.Component {
    constructor() {
        super()
    };

    render() {
        return (
            <Router>
                <div id='home'>
                    <NavBar />
                    <Route path='/' exact component={ Categories } />
                    <Route path='/categories/:category' exact component={ CategoryProducts }/> 
                    <Route path='/products/' exact component={ CategoryProducts }/> 
                    <Route path='/products/:productId' component = { SingleProduct }/> 
                    <Route path='/profile' exact />
                    <Route path='/sign-in' exact />
                    <Route path='/register' exact />                    
                    <Footer />
                </div>

            </Router>
        )
    };
}


export default connect(null)(App);