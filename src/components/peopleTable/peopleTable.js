import React from 'react';
import PeopleRow from './peopleRow';

function PeopleTable({ people }) {
  return (
    <table>
      <caption>Random People</caption>
      <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {people.map((people, i) => (
          <PeopleRow
            people={people}
            key={i}
          />
        ))}
      </tbody>
    </table>
  );
}

export default PeopleTable;
