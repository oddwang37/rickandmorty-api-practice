import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import errorImg from './../../assets/images/rick-error.png';

const ErrorPage = () => {
  return (
    <Root>
      <ImgWrapper>
        <Image src={errorImg} />
      </ImgWrapper>
      <div>
        <Title>
          404 error <br /> page not found
        </Title>
        <Text>
          What are you looking for? <br /> Sorry, dude. Page not found. <br />
          Try back to <Link to="/">main page</Link>
        </Text>
      </div>
    </Root>
  );
};

export default ErrorPage;

const Root = styled.div`
  grid-area: 1 / 1 / 6 / 5;
  place-self: center;
  padding-top: 30px;
  margin-top: 20px;
  display: flex;
  width: 70%;
  gap: 50px;
  align-items: center;
  justify-content: center;
  background-color: #313131;
  border-radius: 10px;
`;

const Image = styled.img``;

const ImgWrapper = styled.div`
  width: 250px;
  align-self: flex-end;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  text-transform: capitalize;
`;

const Text = styled.div`
  margin-top: 40px;
  font-size: 18px;
`;
