import React from 'react';
import CharacterListItem from './CharacterListItem';
import './CharactersList.css';

function CharactersList({ peopleData, onDeleteCharacter, onEditCharacter }) {
  return (
    <section className="characters-list">
      <h2>Characters List</h2>
      <ul className="character-list">
        {peopleData.map((person, index) => {
          return (
            <CharacterListItem key={index} number={index} 
            person={person} onDeleteCharacter={onDeleteCharacter} 
            onEditCharacter={onEditCharacter}/>
          );
        })}
      </ul>
    </section>
  );
}

export default CharactersList;
