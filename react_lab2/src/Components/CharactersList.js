import React from 'react';
import CharacterListItem from './CharacterListItem';
import './CharactersList.css';

function CharactersList({ peopleData }) {
  return (
    <section className="characters-list">
      <h2>Characters List</h2>
      <ul className="character-list">
        {peopleData.map((person, index) => (
          <CharacterListItem key={index} person={person} />
        ))}
      </ul>
    </section>
  );
}

export default CharactersList;
