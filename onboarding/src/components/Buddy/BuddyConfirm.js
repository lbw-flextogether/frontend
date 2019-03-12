import React from 'react';

class BuddyConfirm extends React.Component {
    constructor() {
        super();
        this.state = {
            "availability": [
                {
                  "day": "Monday",
                  "time_slots": ["6:00 am", "6:30 am"]
                },
                {
                  "day": "Friday",
                  "time_slots": ["7:00 am", "7:30 am", "8:00 am"]
                },
                {
                  "day": "Saturday",
                  "time_slots": ["6:00 am", "8:00 am"]
                }
              ]
        }
    }
    render() {
        return (
            <>
            <h2>Buddy Confirm</h2>
            {this.state.availability.map(day => (
                <>
                <h2>{day.day}</h2>
                <div>
                    {day.time_slots.map(slot => <div>{slot}</div>)}
                </div>
                </>
            ))}
            </>
        );
    }
}

export default BuddyConfirm;