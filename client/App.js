import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Categories from './components/Categories'
import CategoryProducts from './components/CategoryProducts'
import SingleProduct from './components/SingleProduct'
import SignIn from './components/SignIn'
import Register from './components/Register'


class App extends React.Component {
    constructor() {
        super()
    };

    render() {
        return (
            <div id='home'>
            <NavBar />
            <Router>
            <Switch>
                    <Route path='/' exact component={ Categories } />
                    <Route path='/categories/:category' exact component={ CategoryProducts }/>
                    <Route path='/products/' exact component={ CategoryProducts }/>
                    <Route path='/products/:productId' component = { SingleProduct }/>
                    <Route path='/profile' exact />
                    <Route path='/signIn' exact component={SignIn} />
                    <Route path='/register' exact component={Register} />
            </Switch>
            </Router>
            <Footer />
            </div>
        )
    };
}


export default connect(null)(App);
