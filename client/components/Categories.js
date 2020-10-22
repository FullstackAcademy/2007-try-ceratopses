import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import NavBar from './NavBar'



class Categories extends React.Component {
    constructor() {
        super()
    };

    render() {
        const { categories } = this.props
        if (categories) {
            return (
                <div id='categories'>
                    {
                        categories.map(category => {
                            return (
                                <Link to={`/categories/${category}`}>
                                    <div key={category}>
                                        {/* category.image wont exist. create? or use static images? */}
                                        <img src={category.image}></img>
                                    </div>
                                </Link>
                            )                        
                        })
                    }
                </div>
            )
        } else {
            return (
                <div>
                    No Categories
                </div>
            )
        }
    };
}

const mapState = state => ( { categories: state.categories } )

export default connect(mapState)(Categories);