import React from 'react';
import SearchBar from './SearchBar';
import CharactersList from './CharactersList';
import { peopleData } from './data';
import CharacterForm from './CharacterForm';

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <SearchBar />
      <CharactersList peopleData={peopleData} />
      <CharacterForm />
    </div>
  );
}

export default App;
