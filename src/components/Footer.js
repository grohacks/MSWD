import React from 'react';

const Footer = () => {
    const currentDate = new Date().toLocaleDateString('en-GB');

    return (
        <footer style={{ backgroundColor: '#000000', color: '#ffffff', textAlign: 'center', padding: '10px', position: 'fixed', width: '100%', bottom: '0', left: '0' }}>
            <p>Copy Rights reserved under Y23 MSWD</p>
            <p>Date: {currentDate}</p>
        </footer>
    );
};

export default Footer;