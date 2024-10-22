import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: auto;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Img: React.FC<ImgProps> = ({ src, alt, disabled = false }) => (
  <StyledImg src={src} alt={alt} disabled={disabled} />
);

export default Img;
