import React, { useState } from "react";
import { connect } from "react-redux";
import { addBuddy } from "../../actions";

import "../../assets/styles/BuddyInfo.css";

const BuddyInfo = ({ addBuddy, history }) => {
  const initState = {
    name: "",
    email: "",
    phone: "",
    mobility: null
  };
  const [buddy, setBuddy] = useState(initState);

  const handleChanges = e => {
    setBuddy({
      ...buddy,
      [e.target.name]: e.target.value
    });
  };

  const handleMobility = e => {
    e.preventDefault();
    setBuddy({
      ...buddy,
      mobility: e.target.value
    });
  };

  const handleNext = e => {
    e.preventDefault();
    addBuddy(buddy);
    history.push("/complete");
  };

  return (
    <section className="info">
      <h2>Fitness is always more fun with friends!</h2>
      <p>
        Invite a friend or loved on to complete the program with you. We'll show
        them your available times and find a time that works for both of you.
      </p>
      <form className="buddyForm" onSubmit={handleNext}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={buddy.name}
          onChange={handleChanges}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={buddy.email}
          onChange={handleChanges}
        />
        <input
          type="tel"
          placeholder="Telephone Number"
          name="phone"
          value={buddy.phone}
          onChange={handleChanges}
        />
        {/* <label>I prefer to receive notifications by</label>
                <select
                    value={buddy.notification}
                    onChange={handleChanges}
                    name="notification"
                >
                    <option value="EmailAndText">Email & Text</option>
                    <option value="Email">Email Only</option>
                    <option value="Text">Text Message Only</option>
                </select> */}
        <p>Mobility Level (choose one)</p>
        <div className="mobility-btns">
          <button
            value="Low"
            onClick={handleMobility}
            className={buddy.mobility === "Low" ? "active" : null}
          >
            Low
          </button>
          <button
            value="Medium"
            onClick={handleMobility}
            className={buddy.mobility === "Medium" ? "active" : null}
          >
            Medium
          </button>
          <button
            value="High"
            onClick={handleMobility}
            className={buddy.mobility === "High" ? "active" : null}
          >
            High
          </button>
        </div>
        {buddy.mobility ? (
          <button type="submit" className="next-btn">
            Next
          </button>
        ) : null}
      </form>
    </section>
  );
};

export default connect(null, { addBuddy })(BuddyInfo);
