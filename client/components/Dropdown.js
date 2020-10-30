import React from 'react'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'


class CategoriesDropdown extends React.Component {
    constructor() {
        super()
        this.state = {
            show: zz
        }
        this.showDropdown = this.showDropdown.bind(this)
        this.hideDropdown = this.hideDropdown.bind(this)
    }

    showDropdown () {
        if(this.state.show === 'show') {
            this.setState({
                show: ''
            })
        } else {
            this.setState({
                show: 'show'
            })
        }
    }

    hideDropdown () {
        this.setState({
            show: ''
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.categories !== prevProps.categories) {
          this.setState({
            show: ''
          })
        }
    }

    render() {
        const categories = this.props.categories
        return (
            <div className="dropdown">
                <button onClick={ () => this.showDropdown()} className="dropbtn">Dropdown</button>
                <div id="myDropdown" className={`dropdown-content ${this.state.show}`}>
                    {
                        categories.map(category => {
                            return (
                                <div key={category} onClick={ () => this.hideDropdown()}>
                                    <Link to={`/categories/${category}`}>{category}</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}

const mapState = state => ( { categories: state.categories } )

export default connect (mapState) (CategoriesDropdown)
