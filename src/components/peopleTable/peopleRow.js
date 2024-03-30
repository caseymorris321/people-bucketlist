import React from 'react';

function PeopleRow({ people }) {
  return (
    <tr>
      <td><img src={people.picture.thumbnail} alt={people.name.first} style={{width: '50px', height: '50px'}} /></td>
      <td>{`${people.name.first} ${people.name.last}`}</td>
      <td>{people.email}</td>
      <td style={{ whiteSpace: 'nowrap' }}>{people.phone}</td>
      <td>{people.location.city}</td>
    </tr>
  );
}

export default PeopleRow;
