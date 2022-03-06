import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  background-color: #505050;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
  &:hover {
    background-color: #3d3d3d;
  }
`;

export default Button;
