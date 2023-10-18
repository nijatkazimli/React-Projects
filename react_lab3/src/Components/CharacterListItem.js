import React from 'react';
import './CharacterListItem.css';

function CharacterListItem({ number, person, onDeleteCharacter, onEditCharacter }) {
  const handleDeleteClick = () => {
    onDeleteCharacter(person);
  };

  const handleEditClick = () => {
    onEditCharacter(person);
  }

  return (
    <li>
      <div className="character-container">
        <img className="avatar" src={person.avatarUrl} alt={person.name} />
        <div className="info">
          <p>{number + 1}. {person.name}</p>
          <p>{person.email}</p>
        </div>
        <div className="buttons">
          <button className="edit-button" onClick={handleEditClick}>Edit</button>
          <button className="delete-button" onClick={handleDeleteClick}>Delete</button>
        </div>
      </div>
    </li>
  );
}

export default CharacterListItem;
