import React from "react";
import PropTypes from "prop-types";

const Welcome = ({ history }) => {
  const handleBtn = e => {
    e.preventDefault();
    history.push("/start");
  };
  return (
    <section className="welcome">
      <h2>Welcome to FlexTogether</h2>
      <button onClick={handleBtn}>Start</button>
    </section>
  );
};

Welcome.propTypes = {
  history: PropTypes.func.isRequired
};

export default Welcome;
