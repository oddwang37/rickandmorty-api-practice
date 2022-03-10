import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #141414;
    color: #fff;
    font-family: 'Rubik';
    padding: 30px;
    user-select: none;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik';
  }
  img {
    width: 100%;
    pointer-events: none;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;
    &:visited {
      color: #fff;
      text-decoration: none;
    }
    &:active {
      color: #fff;
      text-decoration: none;
    }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root'),
);
