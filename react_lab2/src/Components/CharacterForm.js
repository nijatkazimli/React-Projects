import React from 'react';
import './CharacterForm.css';

function CharacterForm({ onAddCharacter }) {
  return (
    <div className="character-form">
      <h2>Add Character</h2>
      <div className="add-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter name" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" />
        </div>
        <div className="input-group">
          <label htmlFor="avatar">Avatar URL</label>
          <input type="url" id="avatar" placeholder="Enter avatar URL" />
        </div>
        <button className="add-button" onClick={onAddCharacter}>Add</button>
      </div>
    </div>
  );
}

export default CharacterForm;
