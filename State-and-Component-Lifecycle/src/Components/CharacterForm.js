import React, { useState, useEffect } from 'react';
import './CharacterForm.css';

function CharacterForm({ onAddCharacter, personToBeEdited, setPerson, onEditCharacterForm }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    if (personToBeEdited) {
      setName(personToBeEdited.name);
      setEmail(personToBeEdited.email);
      setAvatarUrl(personToBeEdited.avatarUrl);
    } else {
      clearForm();
    }
  }, [personToBeEdited]);

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

  const handleEditCharacter = () => {
    if (personToBeEdited) {
      personToBeEdited.name = name;
      personToBeEdited.email = email;
      personToBeEdited.avatarUrl = avatarUrl;
      onEditCharacterForm(personToBeEdited)
      setPerson(null);
      clearForm();
    }
  };

  const isThereEmptyInput = () => {
    return name.trim() === '' || email.trim() === '' || avatarUrl.trim() === '';
  };

  return (
    <div className="character-form">
      <h2>{personToBeEdited ? 'Edit Character' : 'Add Character'}</h2>
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
        {personToBeEdited ? (
          <button 
            className="form-edit-button" 
            onClick={handleEditCharacter}
            disabled={isThereEmptyInput()}
            >
            Edit
          </button>
        ) : (
          <button
            className="add-button"
            onClick={handleAddCharacter}
            disabled={isThereEmptyInput()}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}

export default CharacterForm;
