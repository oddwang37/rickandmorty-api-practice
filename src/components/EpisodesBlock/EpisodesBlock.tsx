import React from 'react';
import styled from 'styled-components';

import { getFilterEpisodes } from './../../services/services';

const EpisodesBlock = () => {
  const episodesHandler = () => {
    getFilterEpisodes('episode=s01').then((res) => {
      //console.log(res);
    });
  };

  episodesHandler();

  return (
    <Root>
      <Title>Click an episode to see more info...</Title>
    </Root>
  );
};

export default EpisodesBlock;

const Root = styled.ul`
  list-style-type: none;
`;

const Title = styled.h1`
  font-size: 24px;
`;
