import React from 'react';

const Courses = ({ code, name, ltps, credits }) => (
    <tr>
        <td style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>{code}</td>
        <td style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>{name}</td>
        <td style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>{ltps}</td>
        <td style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>{credits}</td>
    </tr>
);

export default Courses;