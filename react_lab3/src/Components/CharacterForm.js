import React, { useState } from 'react';
import './CharacterForm.css';

function CharacterForm({ onAddCharacter }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const clearForm = () => {
    setName('');
    setEmail('');
    setAvatarUrl('');
  };

  const handleAddCharacter = () => {
    const newCharacter = {
      name,
      email,
      avatarUrl,
    };
    onAddCharacter(newCharacter);
    clearForm();
  };

  return (
    <div className="character-form">
      <h2>Add Character</h2>
      <div className="add-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="avatar">Avatar URL</label>
          <input
            type="url"
            id="avatar"
            placeholder="Enter avatar URL"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
          />
        </div>
        <button className="add-button" onClick={handleAddCharacter}>
          Add
        </button>
      </div>
    </div>
  );
}

export default CharacterForm;
