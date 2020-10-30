import React from 'react';
import { GiFlowerPot } from 'react-icons/gi';
import { animateScroll as scroll } from 'react-scroll';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';

import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialMediaWrap,
  SocialMedia,
  SocialLogo,
  WebsiteRights,
  FooterLinkP,
} from './FooterElements';

const toggleHome = () => {
  scroll.scrollToTop();
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems id="about-us">
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">Company Info</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLinkP to="/">Address</FooterLinkP>
              <FooterLinkP to="/">Phone</FooterLinkP>
              <FooterLinkP to="/">Email</FooterLinkP>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Follow Us</FooterLinkTitle>
              <SocialMedia>
                <SocialIcons>
                  <SocialIconLink
                    href="//www.facebook.com"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <FaFacebookSquare />
                  </SocialIconLink>
                  <SocialIconLink
                    href="//www.twitter.com"
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <FaTwitterSquare />
                  </SocialIconLink>
                  <SocialIconLink
                    href="//www.instagram.com"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaInstagramSquare />
                  </SocialIconLink>
                  <SocialIconLink
                    href="//www.youtube.com"
                    target="_blank"
                    aria-label="Youtube"
                  >
                    <FaYoutubeSquare />
                  </SocialIconLink>
                </SocialIcons>
              </SocialMedia>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMediaWrap>
          <SocialLogo to="/" onClick={toggleHome}>
            <GiFlowerPot />
            Florita
          </SocialLogo>

          <WebsiteRights>
            Designed by <i>Try Ceratopses Team - </i> Copyright &copy;
            {new Date().getFullYear()} Florita. All rights reserved.
          </WebsiteRights>
        </SocialMediaWrap>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
