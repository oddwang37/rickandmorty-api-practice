import React from 'react';
import styled from 'styled-components';

const Overlay = ({ children, height }: OverlayProps) => {
  return <Root height={height}>{children}</Root>;
};

export default Overlay;

type OverlayProps = {
  children: JSX.Element;
  height?: string;
};

interface RootProps {
  height?: string;
}

const Root = styled.div<RootProps>`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: ${(p) => (p.height ? p.height : '100%')};
  background-color: #141414;
  display: flex;
  justify-content: center;
  align-items: center;
`;
