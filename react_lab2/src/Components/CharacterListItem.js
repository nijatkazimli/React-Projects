import React from 'react';

function CharacterListItem({ number, person }) {
  return (
    <li>
      <p>{number + 1}. {person.name} {person.email}</p>
      <img src={person.avatarUrl}></img>
    </li>
  );
}

export default CharacterListItem;
