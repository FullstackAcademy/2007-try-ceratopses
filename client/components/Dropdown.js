import React from "react";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getCategories } from "../store/categories";

class CategoriesDropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      show: ""
    };
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  componentDidMount() {
    this.props.getCategories();
  }

  showDropdown() {
    
    if (this.state.show === "show") {
      this.setState({
        show: "",
      });
    } else {
      this.setState({
        show: "show",
      });
    }
    console.log('hi')
  }

  hideDropdown() {
    this.setState({
      show: "",
    });
  }

  render() {
    const categories = this.props.categories;
    console.log(categories)
    return (
      <div className="dropdown">
        <button onClick={() => this.showDropdown()} className="dropbtn">
          Dropdown
        </button>
        <div id="myDropdown" className={`dropdown-content ${this.state.show}`}> 
          {categories.map((category) => {
            return (
              <div key={category} onClick={() => this.hideDropdown()}>
                <Link to={`/categories/${category}`}>{category}</Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({ categories: state.categories });

const mapDispatch = (dispatch) => {
  return {
    getCategories: () => dispatch(getCategories()),
  };
};

export default connect(mapState, mapDispatch)(CategoriesDropdown);
