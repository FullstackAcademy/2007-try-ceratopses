import React, { useState, useEffect } from "react";
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
  Form,
  FormInput,
  FormButton,
  NavLinkDown,
} from "./NavbarElements";
import CategoriesDropdown from "../Dropdown";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const toggleFooter = () => {
    scroll.scrollToBottom();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <GiFlowerPot />
              Florita
            </NavLogo>
            <MobileIcon onClick={toggle}>
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
                  onClick={toggleHome}
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
                  onClick={toggleFooter}
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
                <NavBtnLink to="/signin" id="signin">
                  Log In
                </NavBtnLink>
              </NavBtn>
              <NavBtn>
                <NavBtnLink to="/signup" id="signup">
                  Sign Up
                </NavBtnLink>
              </NavBtn>
            </NavItem>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
