import React, { useState, useEffect } from 'react';
import { FaBars, FaRegUser } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { GiFlowerPot } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';
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
} from './NavbarElements';

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
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">
            <GiFlowerPot />
            Florita
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about-us"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="products">Products</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="my-account">
                <FaRegUser />
                My Account
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="cart">
                <FiShoppingCart /> Cart
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavItem>
            <form className="search-form">
              <input className="search-bar" type="text" placeholder="Search" />
              <button className="search-button" type="submit">
                <BsSearch />
              </button>
            </form>
          </NavItem>
          <NavItem>
            <NavBtn>
              <NavBtnLink to="signun">Sign In</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to="/signup">Sign Up</NavBtnLink>
            </NavBtn>
          </NavItem>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
