import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getCharacter } from './../../services/services';

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
        });
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    updateCharacter(selectedChar);
  }, []);

  return (
    <Root>
      <Name></Name>
    </Root>
  );
};

export default CharacterInfo;

type CharacterInfoProps = {
  selectedChar: number | null;
};

const Root = styled.div`
  background-color: #303030;
`;

const Name = styled.div`
  font-size: 20px;
  color: #fff;
  font-weight: 500;
`;

const Gender = styled.div`
  font-size: 18px;
  color: #d4d3d3;
`;

const Species = styled(Gender)``;

const Location = styled(Gender)``;

const Status = styled(Gender)``;
