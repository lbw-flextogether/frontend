import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addRole } from "../actions";

const Start = ({ addRole, history }) => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    addRole(role);
  }, [role]);

  const handleRole = e => {
    e.preventDefault();
    const bool = e.target.name === "companion" ? true : false;
    setRole(bool);
  };

  const handleNext = e => {
    e.preventDefault();
    history.push("/info");
  };

  return (
    <section className="start">
      <h2>Who are you?</h2>
      <p>Choose 1:</p>
      <div>
        <button
          name="senior"
          onClick={handleRole}
          className={role === false ? "active" : null}
        >
          I am interested in low impact exercise
        </button>
        <button
          name="companion"
          onClick={handleRole}
          className={role === true ? "active" : null}
        >
          I want to be a companion to my loved one/friend who needs to do low
          impact exercise
        </button>
      </div>
      {role !== null ? (
        <button onClick={handleNext} className="next-btn">
          Next
        </button>
      ) : null}
    </section>
  );
};

Start.propTypes = {
  addRole: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired
};

export default connect(null, { addRole })(Start);
