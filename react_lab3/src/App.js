import React from 'react';
import CharactersList from './Components/CharactersList';
import { peopleData } from './data';
import CharacterForm from './Components/CharacterForm';
import SearchBar from './Components/SearchBar';
import './App.css';

function App() {
  
  function addCharacterHandler() {
    console.log('Adding character');
  }

  function searchHandler() {
    console.log('Search performed');
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Character Directory</h1>
        <SearchBar onSearch={searchHandler}/>
      </header>
      <main className="app-main">
        <CharactersList peopleData={peopleData} />
        <CharacterForm onAddCharacter={addCharacterHandler}/>
      </main>
    </div>
  );
}

export default App;
