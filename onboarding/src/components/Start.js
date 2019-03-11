import React from 'react';

const Start = props => {
    const handleNext = e => {
        e.preventDefault();
        props.history.push('/info');
    }

    return (
        <>
        <h2>Who are you?</h2>
        <p>Choose 1:</p>
        <button>I am interested in low impact exercise</button>
        <button>I want to be a companion to my loved one/friend who needs to do low impact exercise</button>
        <button onClick={handleNext}>Next</button>
        </>
    );
};

export default Start;