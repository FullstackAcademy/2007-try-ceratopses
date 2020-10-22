import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Categories from './Categories'
import { getCategories } from '../store/store' //may change if store is broken out

class App extends React.Component {
    constructor() {
        super()
    };

    componentDidMount() {
        this.props.getCategories()
    };

    render() {
        return (
            <div id='home'>
                <NavBar />
                <Categories />
                <Footer />
            </div>
        )
    };
}

const mapDispatch = (dispatch) => {
    return {
        getCategories: () => dispatch(getCategories())
    }
}

export default connect(null, mapDispatch)(App);