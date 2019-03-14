import React from 'react';
import { connect } from 'react-redux';
import { manualTime } from '../actions';
import moment from 'moment';
import Loader from 'react-loader-spinner'

class Manual extends React.Component {
    state = {
        meetup_time: '13:30',
        meetup_day: '',
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const time = moment(this.state.meetup_time, 'HH:mm').format('h:mm a');
        const meetup = {
            meetup_time: time,
            meetup_day: this.state.meetup_day
        }
        this.props.manualTime(meetup, this.props.match.params.id)
        this.props.history.push(`/invite/${this.props.match.params.id}/buddycomplete`)
    }

    render() {
        if (this.props.user === undefined) {
            return (
                <div className="loader">
                    <Loader type="ThreeDots" color="#279CCF"/>
                </div>
        )} else {
        return (
            <section className="manual-entry">
            <h2>Looks like we're having a hard time finding a time that works for both of you. Let's try things the old fashioned way.</h2>
            <h3>Please call {this.props.user} and figure out a time that works</h3>
            <h3>What time works?</h3>
            <form>
                <div>
                <input type="time" value={this.state.meetup_time} name="meetup_time" onChange={this.handleChange} />
                <span>on</span>
                    <select value={this.state.meetup_day} name="meetup_day" onChange={this.handleChange}>
                        <option> </option>
                        <option>Sunday</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                    </select>
                </div>
                <button onClick={this.handleSubmit} className="next-btn">Next</button>
            </form>
            </section>
        );
        }
    }
}

const mapStateToProps = state => ({ user: state.name })

export default connect(mapStateToProps, { manualTime })(Manual);