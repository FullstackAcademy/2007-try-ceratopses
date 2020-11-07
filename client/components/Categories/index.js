import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from "../../store/categories";

class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { categories } = this.props;
    if (categories.length !== 0) {
      return (
        <div id="categories">
          {categories.map((category) => {
            return (
              <div key={category}>
                <Link to={`/categories/${category}`}>
                  <div>{category}</div>
                  {/* category.image wont exist. create? or use static images? */}
                  <img src={category.image}></img>
                </Link>
              </div>
            );
          })}
        </div>
      );
    }
      return <div>No Categories</div>;
  }
}

const mapState = (state) => ({ categories: state.categories });

const mapDispatch = (dispatch) => {
  return {
    getCategories: () => dispatch(getCategories()),
  };
};

export default connect(mapState, mapDispatch)(Categories);
