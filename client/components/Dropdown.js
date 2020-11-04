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
  }

  hideDropdown() {
    this.setState({
      show: "",
    });
  }

  render() {
    const categories = this.props.categories;
    return (
      <div className="dropdown">
        <button onClick={() => this.showDropdown()} className="dropbtn">
          Products
        </button>
        <div id="myDropdown" className={`dropdown-content ${this.state.show}`}> 
          <div onClick={() => this.hideDropdown()}>
            <Link to={`/products/`}>All Products</Link>
          </div>        
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
