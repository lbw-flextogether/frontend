import React from 'react';
import Day from './TimePicker/Day';
import moment from 'moment-timezone'

class Time extends React.Component {
    state = {
        timezone: '',
        selectedTimes: {
            Sunday: [],
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
            Saturday: [],
        }
    }

    selectTime = (day, time, clicked) => {
        if (!clicked) {
            this.setState({
                selectedTimes: {
                    ...this.state.selectedTimes,
                    [day]: this.state.selectedTimes[day].filter(item => item !== time)
                }
            })
        } else {
            this.setState({
                selectedTimes: {
                    ...this.state.selectedTimes,
                    [day]: [...this.state.selectedTimes[day], time]
                }
            })
        }
    }

    handleNext = e => {
        e.preventDefault();
        this.props.history.push('/buddyinfo')
    }

    render() {
        return (
            <>
            <h2>What's a good time to complete the program?</h2>
            <p>To complete the beta, we are asking that people commit to one 30 minute time block once a week. Please choose what times work well for you.</p>
            <label>Select Your Time Zone:</label>
            <select>
                <option></option>
                {moment.tz.names().map(name => <option key={name}>{name}</option>)}
            </select>
            <div className="days">
            {Object.keys(this.state.selectedTimes).map(day=><Day day={day} key={day} selectTime={this.selectTime} />)}
            </div>
            <button onClick={this.handleNext}>Next</button>
            </>
        );
    }
}

export default Time;