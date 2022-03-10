import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

import { getEpisode, getCharacter } from './../../services/services';
import bgPath from './../../assets/images/single-episode-bg.jpg';

const SingleEpPage = () => {
  const { episodeId } = useParams<{ episodeId: string }>();
  const [episodeInfo, setEpisode] = useState<EpisodeType>({
    name: '',
    air_date: '',
    episode: '',
  });
  const [charList, setCharList] = useState<CharListType>([]);

  const updateEpisode = () => {
    getEpisode(Number(episodeId)).then((res) => {
      setEpisode({ ...res });
      const charURLs: string[] = res.characters;
      const charIds: number[] = charURLs.map((item) => {
        const from: number = item.lastIndexOf('/') + 1;
        return Number(item.substring(from));
      });
      getCharacter(charIds).then((res) => {
        const resArray: { name: string }[] = res;
        setCharList(
          resArray.map((item) => {
            return item.name;
          }),
        );
      });
    });
  };

  useEffect(() => {
    updateEpisode();
  }, []);

  const { name, air_date, episode } = episodeInfo;

  return (
    <Root>
      <Wrapper>
        <Info>
          <Title>{name}</Title>
          <EpNumber>{episode}</EpNumber>
          <ReleaseDate as="div">Realesed {air_date}</ReleaseDate>
        </Info>
        <Starring>
          <SecondTitle>Starring: </SecondTitle>
          <CharacterList>
            {charList.map((item, index) => {
              return <React.Fragment key={index + ''}>{item}, </React.Fragment>;
            })}
          </CharacterList>
        </Starring>
      </Wrapper>
    </Root>
  );
};

export default SingleEpPage;

type EpisodeType = {
  name: string;
  air_date: string;
  episode: string;
};

type CharListType = string[] | never[];

const Root = styled.div`
  grid-area: 1 / 1 / 12 / 4;
  padding: 70px;
  padding-top: 120px;
  background: url(${bgPath}) center center / cover;
  color: #492414;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div``;

const Starring = styled.div`
  padding-left: 20%;
`;

const Title = styled.h2`
  font-size: 72px;
  text-transform: uppercase;
`;

const SecondTitle = styled(Title)`
  font-size: 38px;
  font-size: 400;
  margin-top: 20px;
`;

const EpNumber = styled.span`
  font-size: 54px;
`;

const ReleaseDate = styled(EpNumber)`
  font-size: 24px;
  font-weight: 500;
`;

const CharacterList = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-top: 40px;
`;
