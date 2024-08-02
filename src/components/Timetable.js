import React from 'react';

const Timetable = ({ day, hours, course, room }) => (
    <tr>
        <td style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>{day}</td>
        <td style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>{hours}</td>
        <td style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>{course}</td>
        <td style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>{room}</td>
    </tr>
);

export default Timetable;