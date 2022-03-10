import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import rickHead from './../../assets/images/rick-head.png';

const Header = () => {
  return (
    <Root>
      <NavLink exact to="/">
        <Logo>
          <LogoImg src={rickHead} alt="face of drunk Rick from Rick and Morty serial" />
          <LogoText>
            Rick and Morty <br /> characters
          </LogoText>
        </Logo>
      </NavLink>
      <Inner>
        <NavLink exact to="/" activeStyle={activeNavLinkStyle}>
          Characters
        </NavLink>
        <div>/</div>
        <NavLink exact to="/episodes" activeStyle={activeNavLinkStyle}>
          Episodes
        </NavLink>
      </Inner>
    </Root>
  );
};

export default Header;

const Root = styled.header`
  display: flex;
  justify-content: space-between;
  grid-area: 1 / 1 / 2 / 4;
`;
const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
`;

const LogoImg = styled.img`
  width: 80px;
`;
const LogoText = styled.span`
  font-size: 22px;
  font-weight: 700;
  text-transform: capitalize;
  flex: 1;
  margin-left: 10px;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0.15;
`;

const activeNavLinkStyle = {
  textDecoration: 'underline',
};
