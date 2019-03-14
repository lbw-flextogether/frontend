import React from 'react';
import Day from './TimePicker/Day';
import moment from 'moment-timezone';
import { connect } from 'react-redux';
import { addTimes } from '../actions';
import Slider from "react-slick";


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
        },
        windowsize: ''
    }

    componentDidMount() {
        this.getWindowSize()
        window.addEventListener('resize', () => this.getWindowSize())
    }

    getWindowSize = () => {
        if (window.innerWidth <= 550) {
            this.setState({
                windowsize: 'phone'
            })
        } else if (window.innerWidth <= 690 ) {
            this.setState({
                windowsize: 'tablet'
            })
        } else {
            this.setState({
                windowsize: 'desktop'
            })
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
            timeslots: this.state.selectedTimes[day]
        }))
        this.props.addTimes(time, this.state.timezone)
        this.props.history.push('/buddyinfo')
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
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
            {/* {this.state.windowsize !== 'phone'  &&
            <div className={this.state.windowsize === 'tablet' ? 'days tablet' : 'days'}>
            {Object.keys(this.state.selectedTimes).map(day=><Day day={day} key={day} selectTime={this.selectTime} />)}
            </div>} */}
            <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
            <button onClick={this.handleNext} className="next-btn">Next</button>
            </section>
        );
    }
}

export default connect(null, { addTimes })(Time);