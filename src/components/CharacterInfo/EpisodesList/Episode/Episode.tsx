import React from 'react';
import styled from 'styled-components';

const Episode = ({ name, episode }: EpisodeProps) => {
  console.log(name, episode);
  return (
    <Root>
      <Name>{name}</Name>
      <EpisodeNumber>{episode}</EpisodeNumber>
    </Root>
  );
};

export default Episode;

type EpisodeProps = {
  name: string;
  episode: string;
};

const Root = styled.li`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  //box-shadow: 10px 10px 0.1px #fff;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const Name = styled.div``;

const EpisodeNumber = styled.div``;
