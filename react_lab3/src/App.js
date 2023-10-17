import React, { useState } from 'react';
import CharactersList from './Components/CharactersList';
import CharacterForm from './Components/CharacterForm';
import SearchBar from './Components/SearchBar';
import './App.css';
import { peopleData } from './data';

function App() {
  const [peopleDataState, setPeopleDataState] = useState(peopleData);
  const [filteredPeopleData, setFilteredPeopleData] = useState(peopleData);
  const [searchTerm, setSearchTerm] = useState('');

  function deleteCharacter(personToDelete) {
    const personIndex = peopleDataState.findIndex(person => person === personToDelete);
    const personIndexInFiltered = filteredPeopleData.findIndex(person => person === personToDelete)

    if (personIndex !== -1) {
      const updatedData = [...peopleDataState];
      updatedData.splice(personIndex, 1);

      setPeopleDataState(updatedData);
    }
    if (personIndexInFiltered !== -1) {
      const updatedFilteredData = [...filteredPeopleData]
      updatedFilteredData.splice(personIndexInFiltered, 1)
      
      setFilteredPeopleData(updatedFilteredData)
    }
  }

  function searchHandler(searchTerm) {
    setSearchTerm(searchTerm);
    console.log('Search performed with term: ' + searchTerm);
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredData = peopleDataState.filter((person) => {
      const lowerCaseName = person.name.toLowerCase();
      const lowerCaseEmail = person.email.toLowerCase();
      return lowerCaseName.includes(lowerCaseSearchTerm) || lowerCaseEmail.includes(lowerCaseSearchTerm);
    });
    setFilteredPeopleData(filteredData);
  }

  function addCharacterHandler(newCharacter) {
    const updatedData = [...peopleDataState, newCharacter];
    setPeopleDataState(updatedData);
    if (newCharacter.name.toLowerCase().includes(searchTerm.toLowerCase())
    || newCharacter.email.toLowerCase().includes(searchTerm.toLowerCase())) {
      const updatedFilteredData = [...filteredPeopleData]
      updatedFilteredData.push(newCharacter)
      
      setFilteredPeopleData(updatedFilteredData)
    }
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Character Directory</h1>
        <SearchBar onSearch={searchHandler} searchTerm={searchTerm} />
      </header>
      <main className="app-main">
        <CharactersList peopleData={filteredPeopleData} onDeleteCharacter={deleteCharacter} />
        <CharacterForm onAddCharacter={addCharacterHandler} />
      </main>
    </div>
  );
}

export default App;
