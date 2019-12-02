import React from "react";

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
    return (
      <div
        onMouseDown={() => this.handleClick()}
        onMouseOver={e => {
          if (e.buttons === 1) {
            this.handleClick();
          }
        }}
        className={!this.state.clicked ? "slot" : "slot selected-slot"}
      >
        {this.props.slot}
      </div>
    );
  }
}

export default Slot;
