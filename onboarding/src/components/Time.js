import React from 'react';
import Day from './TimePicker/Day';
import moment from 'moment-timezone';
import { connect } from 'react-redux';
import { addTimes } from '../actions';

import '../assets/styles/Time.css';

class Time extends React.Component {
    state = {
        timezone: 'America/Los_Angeles',
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

    handleTimeZone = e => {
        this.setState({
            timezone: e.target.value
        })
    }

    handleNext = e => {
        e.preventDefault();
        const time = Object.keys(this.state.selectedTimes).filter(day => this.state.selectedTimes[day].length > 0).map(day => ({
            day: day,
            time_slots: this.state.selectedTimes[day]
        }))
        this.props.addTimes(time, this.state.timezone)
        this.props.history.push('/buddyinfo')
    }

    render() {
        return (
            <>
            <h2>What's a good time to complete the program?</h2>
            <p>To complete the beta, we are asking that people commit to one 30 minute time block once a week. Please choose what times work well for you.</p>
            <label>Select Your Time Zone:</label>
            <select value={this.state.timezone} onChange={this.handleTimeZone}>
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

export default connect(null, { addTimes })(Time);