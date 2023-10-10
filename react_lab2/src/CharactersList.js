// CharactersList.js
import React from 'react';
import CharacterListItem from './CharacterListItem';

function CharactersList({ peopleData }) {
  return (
    <div>
      <h2>CharactersList Component</h2>
      <ul>
        {peopleData.map((person, index) => (
          <CharacterListItem key={index} person={person} />
        ))}
      </ul>
    </div>
  );
}

export default CharactersList;
