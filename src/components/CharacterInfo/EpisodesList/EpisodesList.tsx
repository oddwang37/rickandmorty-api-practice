import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getEpisode } from '../../../services/services';
import Episode from './Episode/Episode';

const EpisodesList = ({ data }: EpisodesListProps) => {
  const [episodes, setEpisodes] = useState<Episodes>([]);

  const episodesNumbers: number[] = [];
  data.forEach((item: string) => {
    const stringEpNumber = item.substring(item.lastIndexOf('/') + 1);
    episodesNumbers.push(parseInt(stringEpNumber));
  });

  const episodesHandler = () => {
    getEpisode(episodesNumbers).then((res) => {
      let result: Episodes = res.length > 1 ? [...res] : [res];
      setEpisodes(result.slice(0, 6));
    });
  };

  useEffect(episodesHandler, [data]);

  return (
    <>
      <Title>Episodes:</Title>
      <Root>
        {episodes.map((item: any) => (
          <Episode name={item.name} episode={item.episode} key={item.id + ''} />
        ))}
      </Root>
    </>
  );
};

export default EpisodesList;

type EpisodesListProps = {
  data: [] | never[];
};

type Episodes = { name: string; episode: string; id: number }[];

const Root = styled.ul`
  list-style-type: none;
  padding: 8px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-top: 20px;
`;
