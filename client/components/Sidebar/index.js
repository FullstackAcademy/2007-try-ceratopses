import React from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SideBtnWrap,
  SidebarRoute,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="about-us" onClick={toggle}>
            About Us
          </SidebarLink>
          <SidebarLink to="products" onClick={toggle}>
            Products
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="my-account" onClick={toggle}>
            My Account
          </SidebarLink>
          <SidebarLink to="cart" onClick={toggle}>
            Cart
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
        <SideBtnWrap>
          <SidebarRoute to="/signup">Sign Up</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
