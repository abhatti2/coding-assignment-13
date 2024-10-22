import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHeroImage = styled.div<{ disabled?: boolean; backgroundImage: string }>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

const HeroImage: React.FC<HeroImageProps> = ({ backgroundImage, text, disabled = false }) => (
  <StyledHeroImage
    backgroundImage={backgroundImage}
    disabled={disabled}
    role="region" // Adding role for accessibility
    aria-label={disabled ? 'Hero Image is Disabled' : 'Hero Image Accessible'} // aria-label for accessibility
    data-testid="hero-image-container"
  >
    {text}
  </StyledHeroImage>
);

export default HeroImage;
