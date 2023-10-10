import React from 'react';
import SearchBar from './Components/SearchBar';
import CharactersList from './Components/CharactersList';
import { peopleData } from './data';
import CharacterForm from './Components/CharacterForm';

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
