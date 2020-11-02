import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { logOutUser } from '../../store/user'
import { FaBars, FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GiFlowerPot } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavLinks,
  NavMenu,
  NavItem,
  NavBtn,
  NavBtnLink,
  NavBtnLogOut,
  Form,
  FormInput,
  FormButton,
  NavLinkDown,
} from "./NavbarElements";
import CategoriesDropdown from "../Dropdown";
import { render } from "react-dom";

class Navbar extends React.Component {
  constructor() {
    super()
    //this.changeNav = this.changeNav.bind(this)
    this.toggleHome = this.toggleHome.bind(this)
    this.toggleFooter = this.toggleFooter.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  async onClick (e) {
    e.preventDefault();
    this.props.logOutUser()
  }

  // componentDidMount() {
  //   const [scrollNav, setScrollNav] = useState(false);
  // }

  //const Navbar = ({ toggle }) => {


  // changeNav () {
  //   if (window.scrollY >= 80) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // };

  // useEffect (() => {
  //   window.addEventListener("scroll", changeNav);
  // }, []);

  toggleHome () {
    scroll.scrollToTop();
  };

  toggleFooter () {
    scroll.scrollToBottom();
  };

  render() {
    const {user} = this.props
    if (user.email) {
      return (
        <>
          <IconContext.Provider value={{ color: "#fff" }}>
            <Nav>
              <NavbarContainer>
                <NavLogo to="/" onClick={this.toggleHome}>
                  <GiFlowerPot />
                  Florita
                </NavLogo>
                <MobileIcon onClick={this.props.toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks
                      to="/"
                      id="home"
                      // smooth={true}
                      // duration={500}
                      // spy={true}
                      // exact="true"
                      // offset={-80}
                      onClick={this.toggleHome}
                    >
                      Home
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinkDown
                      to="about-us"
                      id="about-us"
                      // smooth={true}
                      // duration={500}
                      // spy={true}
                      // exact="true"
                      // offset={-80}
                      onClick={this.toggleFooter}
                    >
                      About Us
                    </NavLinkDown>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="/products" id="products">
                      Products
                    </NavLinks>
                  </NavItem>
                  {/*  The categories should be a dropdown menu, not a separate page
                  <NavItem>
                    <NavLinks to="/categories" id="categories">
                      Categories
                    </NavLinks>
                  </NavItem> */}
                  <NavItem>
                    <NavLinks
                      to="/profile"
                      id="profile"
                      // spy={true} exact="true"
                    >
                      <FaRegUser />
                      My Account
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks
                      to="/cart"
                      // spy={true} exact="true"
                      id="cart"
                    >
                      <FiShoppingCart /> Cart
                    </NavLinks>
                  </NavItem>
                </NavMenu>
                <NavItem>
                  <Form className="search-form" action="#">
                    <FormInput
                      className="search-bar"
                      type="text"
                      placeholder="Search"
                    />
                    <FormButton className="search-button" type="submit">
                      <BsSearch />
                    </FormButton>
                  </Form>
                </NavItem>
                <NavItem>
                  <NavBtn>
                    <NavBtnLogOut onClick={this.onClick}>Log Out</NavBtnLogOut>
                  </NavBtn>
                </NavItem>
              </NavbarContainer>
            </Nav>
          </IconContext.Provider>
        </>
      );
    }

    else {
      return (
        <>
          <IconContext.Provider value={{ color: "#fff" }}>
            <Nav>
              <NavbarContainer>
                <NavLogo to="/" onClick={this.toggleHome}>
                  <GiFlowerPot />
                  Florita
                </NavLogo>
                <MobileIcon onClick={this.props.toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks
                      to="/"
                      id="home"
                      // smooth={true}
                      // duration={500}
                      // spy={true}
                      // exact="true"
                      // offset={-80}
                      onClick={this.toggleHome}
                    >
                      Home
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinkDown
                      to="about-us"
                      id="about-us"
                      // smooth={true}
                      // duration={500}
                      // spy={true}
                      // exact="true"
                      // offset={-80}
                      onClick={this.toggleFooter}
                    >
                      About Us
                    </NavLinkDown>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="/products" id="products">
                      Products
                    </NavLinks>
                  </NavItem>
                  {/*  The categories should be a dropdown menu, not a separate page
                  <NavItem>
                    <NavLinks to="/categories" id="categories">
                      Categories
                    </NavLinks>
                  </NavItem> */}
                  <NavItem>
                    <NavLinks
                      to="/profile"
                      id="profile"
                      // spy={true} exact="true"
                    >
                      <FaRegUser />
                      My Account
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks
                      to="/cart"
                      // spy={true} exact="true"
                      id="cart"
                    >
                      <FiShoppingCart /> Cart
                    </NavLinks>
                  </NavItem>
                </NavMenu>
                <NavItem>
                  <Form className="search-form" action="#">
                    <FormInput
                      className="search-bar"
                      type="text"
                      placeholder="Search"
                    />
                    <FormButton className="search-button" type="submit">
                      <BsSearch />
                    </FormButton>
                  </Form>
                </NavItem>
                <NavItem>
                  <NavBtn>
                    <NavBtnLink to="/signIn" id="signin">
                      Log In
                    </NavBtnLink>
                  </NavBtn>
                  <NavBtn>
                    <NavBtnLink to="/signUp" id="signup">
                      Sign Up
                    </NavBtnLink>
                  </NavBtn>
                </NavItem>
              </NavbarContainer>
            </Nav>
          </IconContext.Provider>
        </>
      );
    }
  }
};

const mapState = state => (
  {
    user: state.user
  }
)

const mapDispatch = (dispatch) => {
    return {
      logOutUser: () => dispatch({type: "LOG_OUT"})
    }
}

export default connect(mapState, mapDispatch)(Navbar);
