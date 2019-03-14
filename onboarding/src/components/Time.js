import React from 'react';
import Day from './TimePicker/Day';
import moment from 'moment-timezone';
import { connect } from 'react-redux';
import { addTimes } from '../actions';
import Slider from "react-slick";


class Time extends React.Component {
    state = {
        timezone: 'America/Chicago',
        selectedTimes: {
            Sunday: [],
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
            Saturday: [],
        },
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
            timeslots: this.state.selectedTimes[day]
        }))
        this.props.addTimes(time, this.state.timezone)
        this.props.history.push('/buddyinfo')
    }

    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 690,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 590,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
          };
        return (
            <section className="time">
            
            <h2>What's a good time to complete the program?</h2>
            <p>To complete the beta, we are asking that people commit to one 30 minute time block once a week. Please choose what times work well for you.</p>
            <label htmlFor="timezone">Select Your Time Zone:</label>
            <select value={this.state.timezone} onChange={this.handleTimeZone} id="timezone">
                <option></option>
                {moment.tz.names().map(name => <option key={name}>{name}</option>)}
            </select>
            
            <div className='days slick-slider'>
            <Slider {...settings}>
            {Object.keys(this.state.selectedTimes).map(day=><Day day={day} key={day} selectTime={this.selectTime} />)}
            </Slider>
            </div>
            
            <button onClick={this.handleNext} className="next-btn">Next</button>
            </section>
        );
    }
}

export default connect(null, { addTimes })(Time);