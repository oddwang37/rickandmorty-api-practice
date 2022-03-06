import React from 'react';
import styled from 'styled-components';
import rickHead from './../../assets/images/rick-head.png';

const Header = () => {
  return (
    <Root>
      <Logo>
        <LogoImg src={rickHead} alt="face of drunk Rick from Rick and Morty serial" />
        <LogoText>
          Rick and Morty <br /> characters
        </LogoText>
      </Logo>
      <Link>Episodes</Link>
    </Root>
  );
};

export default Header;

const Root = styled.header`
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
`;

const LogoImg = styled.img`
  flex: 0.4;
`;
const LogoText = styled.div`
  font-size: 22px;
  font-weight: 700;
  text-transform: capitalize;
  flex: 1;
  margin-left: 10px;
`;

const Link = styled.a`
  text-transform: capitalize;
  align-self: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;
