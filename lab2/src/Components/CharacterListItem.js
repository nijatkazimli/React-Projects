import React from 'react';
import './CharacterListItem.css';

function CharacterListItem({ number, person }) {
  return (
    <li>
      <div className="character-container">
        <img className="avatar" src={person.avatarUrl} alt={person.name} />
        <div className="info">
          <p>{number + 1}. {person.name}</p>
          <p>{person.email}</p>
        </div>
        <div className="buttons">
          <button className="delete-button">Delete</button>
          <button className="message-button">Message</button>
        </div>
      </div>
    </li>
  );
}

export default CharacterListItem;
