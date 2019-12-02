import React from "react";
import { connect } from "react-redux";
import { postInfo } from "../actions";

class Complete extends React.Component {
  componentDidMount() {
    const user = {
      name: this.props.name,
      email: this.props.email,
      phone_number: this.props.phone_number,
      notification_preference: this.props.notification_preference,
      mobility_level: this.props.mobility_level,
      timezone: this.props.time_zone,
      availability: this.props.availability,
      recipient_name: this.props.recipient_name,
      recipient_email: this.props.recipient_email,
      recipient_phone_number: this.props.recipient_phone_number,
      recipient_mobility_level: this.props.recipient_mobility_level,
      is_companion: this.props.is_companion
    };
    this.props.postInfo(user);
  }
  render() {
    return (
      <>
        <h2>Thanks! Please confirm your email address.</h2>
        <p>
          Please check your email for the email that we sent to confirm you
          email address.
        </p>
        <p>Note that you may need to check your junk or spam folder.</p>
      </>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, { postInfo })(Complete);
