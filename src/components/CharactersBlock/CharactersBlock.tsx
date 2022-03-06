import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getCharacter } from '../../services/services';
import CharacterCard from '../CharacterCard/CharacterCard';
import LoadingMessage from '../ui/LoadingMessage';
import ErrorMessage from '../ui/ErrorMessage';

const CharactersBlock = ({ onCharSelect }: CharacterBlockProps) => {
  const [loading, setLoading] = useState(true);
  const [charList, setCharList] = useState<Array<Character>>([]);
  const [error, setError] = useState(false);

  const randomIds: number[] = [];

  for (let i = 0; i < 9; i++) {
    const rand = Math.floor(1 + Math.random() * 823);
    randomIds.push(rand);
  }

  const CharacterHandler = (id: number | number[]) => {
    getCharacter(id)
      .then((res) => {
        setLoading(false);
        setCharList(res);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    CharacterHandler(randomIds);
  }, []);

  const spinner = loading ? <LoadingMessage /> : null;
  const errorMes = error ? <ErrorMessage /> : null;
  const content = !(spinner || errorMes) ? (
    <View array={charList} onCharSelect={onCharSelect} />
  ) : null;

  return (
    <Root>
      {spinner}
      {errorMes}
      {content}
    </Root>
  );
};

const View = ({ array, onCharSelect }: ViewProps) => {
  return (
    <>
      {array.map((item) => (
        <CharacterCard
          name={item.name}
          image={item.image}
          key={item.id + ''}
          onClick={onCharSelect}
        />
      ))}
    </>
  );
};
export default CharactersBlock;

type CharacterBlockProps = {
  onCharSelect: Function;
};

interface Character {
  name: string;
  image: string;
  id: number;
}

type ViewProps = {
  array: { name: string; image: string; id: number }[];
  onCharSelect: Function;
};

const Root = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 60px;
  margin-top: 30px;
  padding: 30px;
`;