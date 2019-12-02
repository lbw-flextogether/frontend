import React from "react";
import moment from "moment-timezone";
import { connect } from "react-redux";

class Slot extends React.Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    this.setState(
      {
        clicked: !this.state.clicked
      },
      () => {
        this.props.selectTime(
          this.props.day,
          this.props.slot,
          this.state.clicked
        );
      }
    );
  };

  render() {
    const time = moment
      .tz(this.props.slot, "h:mm a", this.props.user1timezone)
      .format("h:mm a");
    return (
      <div
        onMouseDown={() => this.handleClick()}
        onMouseOver={e => {
          if (e.buttons === 1) {
            this.handleClick();
          }
        }}
        className={!this.state.clicked ? "slot" : "selected-slot"}
      >
        {moment(time, "h:mm a")
          .tz(this.props.timezone)
          .format("h:mm a")}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user1timezone: state.timezone
});

export default connect(mapStateToProps, {})(Slot);
