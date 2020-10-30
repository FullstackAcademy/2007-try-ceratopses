import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Categories from './components/Categories'
import CategoryProducts from './components/CategoryProducts'
import SingleProduct from './components/SingleProduct'
import SignIn from './components/SignIn'
import Register from './components/Register'
import LogOut from './components/LogOut'
import Profile from './components/Profile'


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
                    <Route path='/profile' exact component = {Profile}/>
                    <Route path='/signIn' exact component={SignIn} />
                    <Route path='/register' exact component={Register} />
                    <Route path='/logout' exact component={LogOut} />
                    <Footer />
                </div>

            </Router>
        )
    };
}


export default connect(null)(App);
