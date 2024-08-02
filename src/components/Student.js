import React from 'react';

const Student = ({ id, name, branch, year }) => (
    <tr>
        <td style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>{id}</td>
        <td style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>{name}</td>
        <td style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>{branch}</td>
        <td style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>{year}</td>
    </tr>
);

export default Student; 