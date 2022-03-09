import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getCharacter } from './../../services/services';
import LoadingMessage from '../ui/LoadingMessage';
import ErrorMessage from '../ui/ErrorMessage';
import Button from './../ui/Button';

const RandomChar = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [charData, setChar] = useState({
    name: '',
    image: '',
    species: '',
    status: '',
    gender: '',
    location: '',
  });

  const updateCharacter = () => {
    setLoading(true);
    const rand = Math.floor(1 + Math.random() * 823);
    getCharacter(rand)
      .then((res) => {
        setLoading(false);
        setChar({
          name: res.name,
          image: res.image,
          species: res.species,
          status: res.status,
          gender: res.gender,
          location: res.location.name,
        });
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    updateCharacter();
  }, []);

  const spinner = loading ? <LoadingMessage height="250px" /> : null;
  const errorMes = error ? <ErrorMessage height="250px" /> : null;

  const { image, name, status, location, species, gender } = charData;

  return (
    <Root>
      <Title>Get random character</Title>
      <Wrapper>
        {spinner}
        {errorMes}
        {!(spinner || errorMes) ? (
          <>
            <ImageWrap>
              <Image src={image} />
            </ImageWrap>
            <Info>
              <Name>{name}</Name>
              <Inner>
                <Species>{species}</Species>
                <div>|</div>
                <Status status={status}>{status}</Status>
                <div>|</div>
                <Gender>{gender}</Gender>
              </Inner>
              <Location>{location}</Location>
              <Button onClick={updateCharacter}>Get another</Button>
            </Info>
          </>
        ) : null}
      </Wrapper>
    </Root>
  );
};

export default RandomChar;

interface StatusProps {
  status: string;
}

const Root = styled.div`
  grid-area: 2 / 1 / 3 / 3;
`;

const Title = styled.h2``;

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
  border-radius: 5px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ImageWrap = styled.div`
  width: 235px;
  height: 235px;
  border-radius: 5px;
  border: 3px solid #999;
`;
const Info = styled.div`
  padding: 30px;
  background-color: #141414;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

const Inner = styled.div`
  display: flex;
  gap: 10px;
  min-width: 60%;
  color: #9c9c9c;
  margin-top: 20px;
`;

const Gender = styled.div`
  font-size: 18px;
  color: #d4d3d3;
  margin-bottom: 10px;
`;

const Species = styled(Gender)``;

const Location = styled(Gender)`
  font-size: 16px;
  margin-top: 15px;
`;

const Status = styled(Gender)<StatusProps>`
  position: relative;
  padding-left: 15px;
  &::after {
    content: '';
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    left: -3px;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: ${(p) => {
      let color;
      switch (p.status) {
        case 'Alive':
          color = `#52ee33`;
          break;
        case 'Dead':
          color = `#fc3939`;
          break;
        case 'unknown':
          color = `#9b9b9b`;
          break;
      }
      return color;
    }};
  }
`;
