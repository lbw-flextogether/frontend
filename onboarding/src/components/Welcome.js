import React from "react";

const Welcome = props => {
  const handleBtn = e => {
    e.preventDefault();
    props.history.push("/start");
  };
  return (
    <section className="welcome">
      <h2>Welcome to FlexTogether</h2>
      <button onClick={handleBtn}>Start</button>
    </section>
  );
};

export default Welcome;
