import React from "react";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import { connect } from "react-redux";

class CategoriesDropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      show: "",
      category: ""
    };
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  updateCategory(category) {
    this.setState({
      category: category,
    });
    console.log(this.state)
  }

  handleClick(ev) {
    console.log('click', ev.target.innerText)
    this.hideDropdown();
    this.updateCategory(ev.target.innerText);
  }


  render() {
    const categories = this.props.categories;
    return (
      <div className="dropdown">
        <button onClick={() => this.showDropdown()} className="dropbtn">
          Dropdown
        </button>
        <div id="myDropdown" className={`dropdown-content ${this.state.show}`}>
          {categories.map((category) => {
            return (
              <div key={category} value={category} onClick={(ev) => this.handleClick(ev)}>
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

export default connect(mapState)(CategoriesDropdown);
