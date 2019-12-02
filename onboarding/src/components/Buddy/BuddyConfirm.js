import React from "react";
import Slot from "./Slot";
import { connect } from "react-redux";
import { confirmTime } from "../../actions";
import moment from "moment-timezone";

class BuddyConfirm extends React.Component {
  state = {
    timezone: "",
    availability: [],
    confirmedAvailability: []
  };

  componentDidMount() {
    this.setState({
      timezone: this.props.timezone,
      availability: this.props.availability
    });
  }

  handleTimeZone = e => {
    this.setState({
      timezone: e.target.value
    });
  };

  selectTime = (day, time, clicked) => {
    const newTime = {
      day: day,
      timeslots: [time]
    };
    if (!clicked) {
      if (
        this.state.confirmedAvailability.find(
          day => day.day === newTime.day
        ) !== undefined
      ) {
        this.setState({
          confirmedAvailability: this.state.confirmedAvailability.map(day => {
            if (day.day === newTime.day) {
              day = {
                ...day,
                timeslots: day.timeslots.filter(
                  slot => slot !== newTime.timeslots[0]
                )
              };
            }
            return day;
          })
        });
      }
    } else {
      if (
        this.state.confirmedAvailability.find(
          day => day.day === newTime.day
        ) === undefined
      ) {
        this.setState({
          confirmedAvailability: [...this.state.confirmedAvailability, newTime]
        });
      } else if (
        this.state.confirmedAvailability.find(
          day => day.day === newTime.day
        ) !== undefined
      ) {
        this.setState({
          confirmedAvailability: this.state.confirmedAvailability.map(day => {
            if (day.day === newTime.day) {
              day = {
                ...day,
                timeslots: [...day.timeslots, newTime.timeslots.toString()]
              };
            }
            return day;
          })
        });
      }
    }
  };

  handleNext = e => {
    e.preventDefault();
    this.props.confirmTime(
      {
        timezone: this.state.timezone,
        availability: this.state.confirmedAvailability
      },
      this.props.match.params.id
    );
    this.props.history.push(
      `/invite/${this.props.match.params.id}/buddycomplete`
    );
  };

  handleManual = e => {
    e.preventDefault();
    this.props.history.push(`/invite/${this.props.match.params.id}/manual`);
  };

  render() {
    return (
      <section className="time">
        <h2>
          Here are some good times for {this.props.user1}, do any of these work
          for you?
        </h2>
        <p>
          To complete the beta we are asking that people commit to one 30 minute
          time block once a week. Please choose what times work well for you.
        </p>
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

        <div className="days buddy-time">
          {this.state.availability.map(day => (
            <div className="buddy-time-day" key={day.day}>
              <h3>{day.day}</h3>
              <div className="time-slots-container" style={{ padding: 0 }}>
                <div
                  className="time-slots"
                  ref="time"
                  style={{ height: "auto" }}
                >
                  {day.timeslots.map(slot => (
                    <Slot
                      key={slot}
                      day={day.day}
                      slot={slot}
                      selectTime={this.selectTime}
                      timezone={this.state.timezone}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={this.handleNext} className="next-btn">
          Next
        </button>
        <p onClick={this.handleManual} className="manual">
          None of these times work for me.
        </p>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user1: state.name,
  timezone: state.timezone,
  availability: state.availability
});

export default connect(mapStateToProps, { confirmTime })(BuddyConfirm);
