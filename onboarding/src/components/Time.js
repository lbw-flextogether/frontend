import React, { useState, useCallback } from "react";
import Day from "./TimePicker/Day";
import moment from "moment-timezone";
import { connect } from "react-redux";
import { addTimes } from "../actions";
import Slider from "react-slick";

const Time = ({ addTimes, history }) => {
  const initState = {
    timezone: "America/Chicago",
    selectedTimes: {
      Sunday: [],
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: []
    }
  };
  const [state, setState] = useState(initState);

  const addTime = (day, time, clicked) => {
    if (!clicked) {
      setState({
        ...state,
        selectedTimes: {
          ...state.selectedTimes,
          [day]: state.selectedTimes[day].filter(item => item !== time)
        }
      });
    } else {
      setState({
        ...state,
        selectedTimes: {
          ...state.selectedTimes,
          [day]: [...state.selectedTimes[day], time]
        }
      });
    }
  };

  const selectTime = useCallback(addTime, []);

  const handleTimeZone = e => {
    setState({
      ...state,
      timezone: e.target.value
    });
  };

  const handleNext = e => {
    e.preventDefault();
    const time = Object.keys(state.selectedTimes)
      .filter(day => state.selectedTimes[day].length > 0)
      .map(day => ({
        day: day,
        timeslots: state.selectedTimes[day]
      }));
    addTimes(time, state.timezone);
    history.push("/buddyinfo");
  };

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
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="time">
      <h2>What's a good time to complete the program?</h2>
      <p>
        To complete the beta, we are asking that people commit to one 30 minute
        time block once a week. Please choose what times work well for you.
      </p>
      <label htmlFor="timezone">Select Your Time Zone:</label>
      <select value={state.timezone} onChange={handleTimeZone} id="timezone">
        <option></option>
        {moment.tz.names().map(name => (
          <option key={name}>{name}</option>
        ))}
      </select>

      <div className="days">
        <Slider {...settings}>
          {Object.keys(state.selectedTimes).map(day => (
            <Day day={day} key={day} selectTime={selectTime} />
          ))}
        </Slider>
      </div>

      <button onClick={handleNext} className="next-btn">
        Next
      </button>
    </section>
  );
};

export default connect(null, { addTimes })(Time);
