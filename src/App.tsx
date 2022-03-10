import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import CharactersBlock from './components/CharactersBlock/CharactersBlock';
import RandomChar from './components/RandomChar/RandomChar';
import CharacterInfo from './components/CharacterInfo/CharacterInfo';
import EpisodesBlock from './components/EpisodesBlock/EpisodesBlock';

const App = () => {
  const [selectedChar, selectChar] = useState<null | number>(null);

  const onCharSelect = (id: number) => {
    selectChar(id);
  };

  return (
    <BrowserRouter>
      <Header />
      <Root>
        <Switch>
          <Route exact path="/">
            <RandomChar />
            <CharactersBlock selectedChar={selectedChar} onCharSelect={onCharSelect} />
            <CharacterInfo selectedChar={selectedChar} />
          </Route>
          <Route exact path="/episodes">
            <EpisodesBlock />
          </Route>
        </Switch>
      </Root>
    </BrowserRouter>
  );
};

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 90px 250px 1fr;
  gap: 50px;
`;

export default App;
