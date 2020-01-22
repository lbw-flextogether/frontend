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
  history: PropTypes.shape({ push: PropTypes.func }).isRequired
};

export default Welcome;
