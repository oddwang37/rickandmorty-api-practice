import React from 'react';
import styled from 'styled-components';

const CharacterCard = ({ name, image, id, selectedChar, onCharSelect }: PropsType) => {
  /*   const [data, setData] = useState({
    character: {
      name: '',
      image: '',
    },
    loading: true,
  }); */

  /*   const updateChar = () => {
    const rand = Math.floor(1 + Math.random() * 823);
    getCharacter(rand).then((res) => {
      console.log(res);
      setData({
        character: {
          name: res.name,
          image: res.image,
        },
        loading: false,
      });
    });
  }; */

  /*   useEffect(() => {
    updateChar();
  }, []); */

  /*   const {
    character: { name, image },
    loading,
  } = data;
 */

  const selected = selectedChar === id;

  return (
    <Root onClick={onCharSelect} selected={selected}>
      <Image src={image} />
      <Name>{name}</Name>
    </Root>
  );
};

export default CharacterCard;

type PropsType = {
  name: string;
  image: string;
  id: number;
  onCharSelect: () => any;
  selectedChar: number | null;
};

type RootProps = {
  selected: boolean;
};

const Root = styled.div<RootProps>`
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s all;
  transform: ${(p) => (p.selected ? 'translateY(-30px)' : 'none')};
  border: ${(p) => (p.selected ? '4px solid #fff' : 'none')};
  &:hover {
    border: 4px solid #999999;
  }
`;

const Image = styled.img`
  border-radius: 5px;
`;

const Name = styled.div`
  font-family: 'Rubik';
  padding: 10px;
  background-color: #3b3b3b;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  border-radius: 5px;
`;
