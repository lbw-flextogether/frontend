import React from 'react';
import { connect } from 'react-redux';

const BuddyComplete = props => {
    return (
        <>
        <h2>Thank you! For the next 4 weeks you and {props.user1} will be working out at</h2>
        <h3 className="confirmed-time">{props.day}s @ {props.time}</h3>
        <p>Don't worry, we'll send you a reminder email and text.</p>
        </>
    );
};

const mapStateToProps = state => ({
    user1: state.name,
    day: state.meetup_day,
    time: state.meetup_time,
})

export default connect(mapStateToProps, {})(BuddyComplete);