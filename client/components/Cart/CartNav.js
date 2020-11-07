import React from 'react';
import { GiFlowerPot } from 'react-icons/gi';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CartNav = ({ quantity }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <h3>
            <GiFlowerPot />
            <i>Florita</i>
          </h3>
        </Link>
        <div className="nav-container">
          <div className="amount-container">
            <p className="total-amount">{quantity}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { quantity: state.quantity };
};
export default connect(mapStateToProps)(CartNav);