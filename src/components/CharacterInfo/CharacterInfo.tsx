import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getCharacter } from './../../services/services';

import CharacterInfoPlaceholder from './CharacterInfoPlaceholder/CharacterInfoPlaceholder';
import EpisodesList from './EpisodesList/EpisodesList';

const CharacterInfo = ({ selectedChar }: CharacterInfoProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [charData, setChar] = useState({
    name: '',
    image: '',
    species: '',
    status: '',
    gender: '',
    location: '',
    episode: [],
  });

  const updateCharacter = (id: number | null) => {
    setLoading(true);
    getCharacter(id)
      .then((res) => {
        setLoading(false);
        setChar({
          name: res.name,
          image: res.image,
          species: res.species,
          status: res.status,
          gender: res.gender,
          location: res.location.name,
          episode: res.episode,
        });
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    updateCharacter(selectedChar);
  }, [selectedChar]);

  const { name, image, species, status, gender, location, episode } = charData;

  return (
    <Root>
      {selectedChar ? (
        <>
          <Wrapper>
            <ImageWrap>
              <Image src={image} />
            </ImageWrap>
            <div>
              <Name>{name}</Name>
              <Species>{species}</Species>
            </div>
          </Wrapper>
          <Status>Status: {status}</Status>
          <Gender>Gender: {gender}</Gender>
          <Location>Location: {location}</Location>
          <EpisodesList data={episode}></EpisodesList>
        </>
      ) : (
        <CharacterInfoPlaceholder />
      )}
    </Root>
  );
};

export default CharacterInfo;

type CharacterInfoProps = {
  selectedChar: number | null;
};

const Root = styled.div`
  grid-area: 2 / 3 / 4 / 4;
  background-color: #303030;
  border-radius: 5px;
  padding: 30px;
  position: sticky;
  height: 650px;
  right: 30px;
  top: 70px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const Image = styled.img`
  border-radius: 5px;
`;

const ImageWrap = styled.div`
  width: 200px;
`;

const Name = styled.div`
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  margin-top: 20px;
`;

const Gender = styled.div`
  font-size: 18px;
  color: #fff;
  margin-top: 10px;
`;

const Species = styled(Gender)`
  letter-spacing: inherit;
  margin-top: 5px;
`;

const Location = styled(Gender)``;

const Status = styled(Gender)``;
