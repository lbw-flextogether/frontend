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
    "confirmedAvailability": [],

  }

  selectTime = (day, time, clicked) => {
    const newTime = {
      "day": day,
      "time_slots": [time],
    }
    if (!clicked) {
      if (this.state.confirmedAvailability.find(day => day.day === newTime.day) !== undefined) {
        this.setState({
          "confirmedAvailability": this.state.confirmedAvailability.map(day => {
            if (day.day === newTime.day) {
              day = {
                ...day,
                "time_slots": day.time_slots.filter(slot => slot !== newTime.time_slots[0])
              }
            }
            return day
          })
          }, () => console.log(this.state.confirmedAvailability))
      }
    } else {
    if (this.state.confirmedAvailability.find(day => day.day === newTime.day) === undefined) {
      this.setState({
          "confirmedAvailability": [
            ...this.state.confirmedAvailability,
            newTime
          ]
          }, () => console.log(this.state.confirmedAvailability))
    } else if (this.state.confirmedAvailability.find(day => day.day === newTime.day) !== undefined) {
      this.setState({
        "confirmedAvailability": this.state.confirmedAvailability.map(day => {
          if (day.day === newTime.day) {
            day = {
              ...day,
              "time_slots": [...day.time_slots, newTime.time_slots.toString()]
            }
          }
          return day
        })
        }, () => console.log(this.state.confirmedAvailability))
    }
  }
}
    
 handleNext = e => {
   e.preventDefault();
   this.props.history.push('/confirmed')
 } 

  render() {
      return (
          <>
          <h2>Here are some good times for [User 1], do any of these work for you?</h2>
          <p>To complete the beta we are asking that people commit to one 30 minute time block once a wekk. Please choose what times work well for you.</p>
          {this.state.availability.map(day => (
              <div key={day.day}>
                <h2>{day.day}</h2>
                <div>
                    {day.time_slots.map(slot => <Slot key={slot} day={day.day} slot={slot} selectTime={this.selectTime} />)}
                </div>
              </div>
          ))}
          <button onClick={this.handleNext}>Next</button>
          <p>None of these times work for me.</p>
          </>
      );
          }
}

export default BuddyConfirm;