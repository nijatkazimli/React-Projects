import React, { useState } from 'react';
import CharactersList from './Components/CharactersList';
import { peopleData } from './data';
import CharacterForm from './Components/CharacterForm';
import SearchBar from './Components/SearchBar';
import './App.css';

function App() {
  const [filteredPeopleData, setFilteredPeopleData] = useState(peopleData);
  function addCharacterHandler() {
    console.log('Adding character');
  }
  function searchHandler(searchTerm) {
    console.log('Search performed with term: ' + searchTerm);
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredData = peopleData.filter((person) => {
      const lowerCaseName = person.name.toLowerCase();
      const lowerCaseEmail = person.email.toLowerCase();
      return lowerCaseName.includes(lowerCaseSearchTerm) || lowerCaseEmail.includes(lowerCaseSearchTerm);
    });
    setFilteredPeopleData(filteredData);
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Character Directory</h1>
        <SearchBar onSearch={searchHandler} />
      </header>
      <main className="app-main">
        <CharactersList peopleData={filteredPeopleData} />
        <CharacterForm onAddCharacter={addCharacterHandler} />
      </main>
    </div>
  );
}

export default App;