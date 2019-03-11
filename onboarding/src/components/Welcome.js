import React from 'react';

const Welcome = props => {
    const handleBtn = e => {
        e.preventDefault();
        props.history.push('/start');
    }
    return (
        <>
        <h1>Welcome to FlexTogether</h1>
        <button onClick={handleBtn}>Start</button>
        </>
    );
};

export default Welcome;