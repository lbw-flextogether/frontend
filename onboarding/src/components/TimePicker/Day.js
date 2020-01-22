import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import Slot from "./Slot";
import { generateTimeslots } from "./generateTimeslots";

import "../../assets/styles/Day.css";

const Day = ({ day, selectTime }) => {
  const [scroll, setScroll] = useState(0);
  const time = useRef(null);

  useEffect(() => {
    time.current.scrollTop = scroll;
  }, [scroll, time]);

  const scrollDown = () => {
    setScroll(scroll + 275);
  };

  const scrollUp = () => {
    setScroll(scroll - 275);
  };

  const timeSlots = generateTimeslots(30, "06:00", "23:00");

  return (
    <div className="slick-slide">
      <h3>{day}</h3>
      <div className="time-slots-container">
        <div className="time-slots" ref={time}>
          {timeSlots.map(slot => (
            <Slot day={day} slot={slot} key={slot} selectTime={selectTime} />
          ))}
        </div>
        {scroll === 0 ? (
          <div onClick={scrollDown} className="scroll">
            Later times &#128899;
          </div>
        ) : scroll >= 500 ? (
          <div onClick={scrollUp} className="scroll">
            Earlier times &#128897;
          </div>
        ) : (
          <div className="scroll">
            <span onClick={scrollUp}>&#128897;</span>
            <span onClick={scrollDown}> &#128899;</span>
          </div>
        )}
      </div>
    </div>
  );
};

Day.propTypes = {
  day: PropTypes.string.isRequired,
  selectTime: PropTypes.func.isRequired
};

export default Day;
