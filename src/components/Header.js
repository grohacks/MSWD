import React from 'react';

const Header = () => {
    return (
        <header style={{ backgroundColor: '#000000', color: '#ffffff', padding: '10px', textAlign: 'center', position: 'relative' }}>
            <h1>Welcome To KL University</h1>
            <div style={{ width: '100%', position: 'relative', overflow: 'hidden', height: '40px', backgroundColor: '#000000', color: '#ffffff' }}>
                <p style={{
                    position: 'absolute',
                    whiteSpace: 'nowrap',
                    animation: 'marquee 7s linear infinite',
                    color: 'white',
                    padding: '10px 0',
                    width: '70%'
                }}>
                    <b>ERP Works Here!</b>
                </p>
            </div>
        </header>
    );
};

export default Header;