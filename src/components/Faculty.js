
import React from 'react';

const Faculty = ({ id, name, designation, department }) => (
    <tr>
        <td style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>{id}</td>
        <td style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>{name}</td>
        <td style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>{designation}</td>
        <td style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>{department}</td>
    </tr>
);

export default Faculty;