import React from "react";
import { connect } from "react-redux";
import { addBuddy } from "../../actions";

import "../../assets/styles/BuddyInfo.css";

class BuddyInfo extends React.Component {
  state = {
    buddy: {
      name: "",
      email: "",
      phone: "",
      mobility: null
    }
  };

  handleChanges = e => {
    this.setState({
      buddy: {
        ...this.state.buddy,
        [e.target.name]: e.target.value
      }
    });
  };

  handleMobility = e => {
    e.preventDefault();
    this.setState({
      buddy: {
        ...this.state.buddy,
        mobility: e.target.value
      }
    });
  };

  handleNext = e => {
    e.preventDefault();
    this.props.addBuddy(this.state.buddy);
    this.props.history.push("/complete");
  };

  render() {
    return (
      <section className="info">
        <h2>Fitness is always more fun with friends!</h2>
        <p>
          Invite a friend or loved on to complete the program with you. We'll
          show them your available times and find a time that works for both of
          you.
        </p>
        <form className="buddyForm" onSubmit={this.handleNext}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.buddy.name}
            onChange={this.handleChanges}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.buddy.email}
            onChange={this.handleChanges}
          />
          <input
            type="tel"
            placeholder="Telephone Number"
            name="phone"
            value={this.state.buddy.phone}
            onChange={this.handleChanges}
          />
          {/* <label>I prefer to receive notifications by</label>
                <select
                    value={this.state.buddy.notification}
                    onChange={this.handleChanges}
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
              onClick={this.handleMobility}
              className={this.state.buddy.mobility === "Low" ? "active" : null}
            >
              Low
            </button>
            <button
              value="Medium"
              onClick={this.handleMobility}
              className={
                this.state.buddy.mobility === "Medium" ? "active" : null
              }
            >
              Medium
            </button>
            <button
              value="High"
              onClick={this.handleMobility}
              className={this.state.buddy.mobility === "High" ? "active" : null}
            >
              High
            </button>
          </div>
          {this.state.buddy.mobility ? (
            <button type="submit" className="next-btn">
              Next
            </button>
          ) : null}
        </form>
      </section>
    );
  }
}

export default connect(null, { addBuddy })(BuddyInfo);
