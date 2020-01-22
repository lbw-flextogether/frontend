import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addInfo } from "../actions";

import "../assets/styles/Info.css";

const Info = ({ addInfo, history }) => {
  const initState = {
    name: "",
    email: "",
    phone: "",
    notification: "",
    mobility: null
  };

  const [user, setUser] = useState(initState);

  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleMobility = e => {
    e.preventDefault();
    setUser({
      ...user,
      mobility: e.target.value
    });
  };

  const handleNext = e => {
    e.preventDefault();
    addInfo(user);
    history.push("/time");
  };

  return (
    <section className="info">
      <h2>Tell us a bit more...</h2>
      <form onSubmit={handleNext}>
        <label htmlFor="name">Your First Name</label>
        <input
          type="text"
          placeholder="e.g. Janet"
          name="name"
          value={user.name}
          onChange={handleChanges}
          id="name"
        />
        <label htmlFor="email">Your Email Address</label>
        <input
          type="email"
          placeholder="e.g. janet@google.com"
          name="email"
          value={user.email}
          onChange={handleChanges}
          id="email"
        />
        <label htmlFor="phone">Your Telephone Number</label>
        <input
          type="tel"
          placeholder="e.g. 555-867-5309"
          name="phone"
          value={user.phone}
          onChange={handleChanges}
          id="phone"
        />
        <label htmlFor="notification">
          I prefer to receive notifications by
        </label>
        <select
          value={user.notification}
          onChange={handleChanges}
          name="notification"
          id="notification"
        >
          <option value="EmailAndText">Email & Text</option>
          <option value="Email">Email Only</option>
          <option value="Text">Text Message Only</option>
        </select>
        <p>Mobility Level (choose one)</p>
        <div className="mobility-btns">
          <button
            value="Low"
            onClick={handleMobility}
            className={user.mobility === "Low" ? "active" : null}
          >
            Low
          </button>
          <button
            value="Medium"
            onClick={handleMobility}
            className={user.mobility === "Medium" ? "active" : null}
          >
            Medium
          </button>
          <button
            value="High"
            onClick={handleMobility}
            className={user.mobility === "High" ? "active" : null}
          >
            High
          </button>
        </div>
        {user.mobility ? (
          <button type="submit" className="next-btn">
            Next
          </button>
        ) : null}
      </form>
    </section>
  );
};

Info.propTypes = {
  addInfo: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired
};

export default connect(null, { addInfo })(Info);
