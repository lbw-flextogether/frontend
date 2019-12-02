import React from "react";
import { connect } from "react-redux";
import { manualTime } from "../actions";
import moment from "moment";
import Loader from "react-loader-spinner";

class Manual extends React.Component {
  state = {
    timezone: "",
    meetup_time: "13:30",
    meetup_day: "Sunday"
  };

  componentDidMount() {
    this.setState({
      timezone: this.props.timezone,
      availability: this.props.availability
    });
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const time = moment(this.state.meetup_time, "HH:mm").format("h:mm a");
    const meetup = {
      timezone: this.state.timezone,
      meetup_time: time,
      meetup_day: this.state.meetup_day
    };
    this.props.manualTime(meetup, this.props.match.params.id);
    this.props.history.push(
      `/invite/${this.props.match.params.id}/buddycomplete`
    );
  };

  handleTimeZone = e => {
    this.setState({
      timezone: e.target.value
    });
  };

  render() {
    if (this.props.user === undefined) {
      return (
        <div className="loader">
          <Loader type="ThreeDots" color="#279CCF" />
        </div>
      );
    } else {
      return (
        <section className="manual-entry">
          <h3>
            Looks like we're having a hard time finding a time that works for
            both of you. Let's try things the old fashioned way.
          </h3>
          <h3>
            Please call {this.props.user} and figure out a time that works
          </h3>
          <h3>What time works?</h3>
          <label htmlFor="timezone">Select your timezone:</label>
          <select
            value={this.state.timezone}
            onChange={this.handleTimeZone}
            id="timezone"
          >
            <option></option>
            {moment.tz.names().map(name => (
              <option key={name}>{name}</option>
            ))}
          </select>
          <form>
            <input
              type="time"
              value={this.state.meetup_time}
              name="meetup_time"
              onChange={this.handleChange}
            />
            <p>on</p>
            <select
              value={this.state.meetup_day}
              name="meetup_day"
              onChange={this.handleChange}
            >
              <option> </option>
              <option>Sunday</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
            </select>
          </form>
          <button onClick={this.handleSubmit} className="next-btn">
            Next
          </button>
        </section>
      );
    }
  }
}

const mapStateToProps = state => ({
  user: state.name,
  timezone: state.timezone
});

export default connect(mapStateToProps, { manualTime })(Manual);
