import React from 'react';
import styled from 'styled-components';

const CharacterCard = ({ name, image, onCharSelect }: PropsType) => {
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
  return (
    <Root onClick={onCharSelect}>
      <Image src={image} />
      <Name>{name}</Name>
    </Root>
  );
};

export default CharacterCard;

type PropsType = {
  name: string;
  image: string;
  onCharSelect: () => any;
};

const Root = styled.div`
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    transform: translateY(-15px);
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
