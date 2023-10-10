import React from 'react';
import CharactersList from './Components/CharactersList';
import { peopleData } from './data';
import CharacterForm from './Components/CharacterForm';
import SearchBar from './Components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Character Directory</h1>
        <SearchBar />
      </header>
      <main className="app-main">
        <CharactersList peopleData={peopleData} />
        <CharacterForm />
      </main>
    </div>
  );
}

export default App;
