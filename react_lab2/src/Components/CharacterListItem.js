import React from 'react';

function CharacterListItem({ number, person }) {
  return (
    <li>{number + 1}. {person.name}</li>
  );
}

export default CharacterListItem;
