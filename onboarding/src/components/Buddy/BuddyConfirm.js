import React from 'react';
import Slot from './Slot';

class BuddyConfirm extends React.Component {
  state = {
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
    ],
    "confirmedAvailability": [
      {
        "day": "",
        "time_slots": [],
      }
    ]

  }

  selectTime = (day, time, clicked) => {
    const addConfirm = {
      "day": day,
      "time_slots": time
    }

    let removeAvailability = [];
    let addAvailability = [];

    if (!clicked) {
      removeAvailability = this.state.confirmedAvailability.map(day => {
        if (addConfirm.day === day.day) {
          day = {
            ...day,
            "time_slots": day.time_slots.filter(slot => slot !== addConfirm.time_slots),
          }
        }
        return day;
      })
    } else {
      addAvailability = this.state.confirmedAvailability.map(day => {
        if (addConfirm.day === day.day) {
          day = {
            ...day,
            "time_slots": [...day.time_slots, addConfirm.time_slots],
          }
        }
        return day;
      })
    }

    if (!clicked) {
        this.setState({
            "confirmedAvailability": removeAvailability,
        }, console.log(this.state.confirmedAvailability))
    } else {
        this.setState({
            "confirmedAvailability": addAvailability,
            }, console.log(this.state.confirmedAvailability))
        }
    }

  render() {
      return (
          <>
          <h2>Buddy Confirm</h2>
          {this.state.availability.map(day => (
              <div key={day.day}>
              <h2>{day.day}</h2>
              <div>
                  {day.time_slots.map(slot => <Slot key={slot} day={day.day} slot={slot} selectTime={this.selectTime} />)}
              </div>
              </div>
          ))}
          </>
      );
          }
}

export default BuddyConfirm;