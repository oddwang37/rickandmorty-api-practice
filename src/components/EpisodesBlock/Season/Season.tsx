import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getFilterEpisodes } from './../../../services/services';

const Season = ({ number }: SeasonProps) => {
  const [episodes, setEpisodes] = useState<EpisodesType>([]);

  const updateEpisodes = () => {
    getFilterEpisodes(`episode=s0${number}`).then((res) => {
      setEpisodes(res.results);
      console.log(res.results);
    });
  };

  useEffect(() => {
    updateEpisodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Root>
      <Title>Season {number}</Title>
      <Episodes>
        {episodes.map((ep, i) => (
          <Episode>{i + 1}</Episode>
        ))}
      </Episodes>
    </Root>
  );
};

export default Season;

type SeasonProps = {
  number: number;
};

type EpisodesType = { episode: string; name: string }[];

const Root = styled.div``;

const Title = styled.h2`
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 50px;
`;

const Episodes = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 75px 75px 75px 75px 75px 75px 75px;
  grid-template-rows: 75px 75px 75px;
  gap: 15px;
`;

const Episode = styled.div`
  background-color: #505050;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #3d3d3d;
  }
`;
