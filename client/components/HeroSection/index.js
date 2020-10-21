import React from 'react';
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from './HeroElements';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Fresh Flowers in Bloom</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $10 in credit towards your
          next purchase
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup" primary="true" dark="true">
            Get Started
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
