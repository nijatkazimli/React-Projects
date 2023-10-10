// App.js
import React from 'react';
import CharactersList from './CharactersList';
import { peopleData } from './data';
import CharacterForm from './CharacterForm';

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <input type="text" placeholder="Search..." />
      <CharactersList peopleData={peopleData} />
      <CharacterForm />
    </div>
  );
}

export default App;
