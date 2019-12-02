import React from "react";
import { connect } from "react-redux";
import { addRole } from "../actions";

class Start extends React.Component {
  state = {
    role: null
  };

  handleRole = e => {
    e.preventDefault();
    const bool = e.target.name === "companion" ? true : false;
    this.setState(
      {
        role: bool
      },
      () => this.props.addRole(this.state.role)
    );
  };

  handleNext = e => {
    e.preventDefault();
    this.props.history.push("/info");
  };

  render() {
    return (
      <section className="start">
        <h2>Who are you?</h2>
        <p>Choose 1:</p>
        <div>
          <button
            name="senior"
            onClick={this.handleRole}
            className={this.state.role === false ? "active" : null}
          >
            I am interested in low impact exercise
          </button>
          <button
            name="companion"
            onClick={this.handleRole}
            className={this.state.role === true ? "active" : null}
          >
            I want to be a companion to my loved one/friend who needs to do low
            impact exercise
          </button>
        </div>
        {this.state.role !== null ? (
          <button onClick={this.handleNext} className="next-btn">
            Next
          </button>
        ) : null}
      </section>
    );
  }
}

export default connect(null, { addRole })(Start);
