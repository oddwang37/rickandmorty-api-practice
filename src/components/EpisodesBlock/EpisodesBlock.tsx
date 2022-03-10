import React from 'react';
import styled from 'styled-components';

import Season from './Season/Season';

const EpisodesBlock = () => {
  return (
    <Root>
      <Title>Click on episode to see more info</Title>
      <Season number={1} />
      <Season number={2} />
      <Season number={3} />
      <Season number={4} />
      <Season number={5} />
    </Root>
  );
};

export default EpisodesBlock;

const Root = styled.div`
  grid-area: 1 / 2 / 3 / 3;
  margin-top: 30px;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
`;
