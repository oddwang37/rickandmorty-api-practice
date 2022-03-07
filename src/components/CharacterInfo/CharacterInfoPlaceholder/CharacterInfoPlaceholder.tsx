import React from 'react';
import styled from 'styled-components';

const CharacterInfoPlaceholder = () => {
  return (
    <>
      <Title>Tap on character card to see more info here...</Title>
      <Inner>
        <ImagePH />
        <div>
          <NamePH />
          <DescriptionPH />
          <NamePH />
          <DescriptionPH />
        </div>
      </Inner>
    </>
  );
};

export default CharacterInfoPlaceholder;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const ImagePH = styled.div`
  width: 200px;
  height: 200px;
  background-color: #505050;
  border-radius: 5px;
`;

const NamePH = styled.div`
  background-color: #7e7e7e;
  width: 190px;
  height: 25px;
  border-radius: 5px;
`;

const DescriptionPH = styled.div`
  background-color: #7e7e7e;
  width: 170px;
  height: 20px;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
