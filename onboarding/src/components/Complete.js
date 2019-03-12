import React from 'react';
import { connect } from 'react-redux';
import { postInfo } from '../actions';

class Complete extends React.Component {
    componentDidMount () {
        const user = {
            "name": this.props.name,
            "email": this.props.email,
            "phone_number": this.props.phone_number,
            "notification_preference": this.props.notification_preference,
            "mobility_level": this.props.mobility_level,
            "time_zone": this.props.time_zone,
            "availability": this.props.availability,
            "recipient_name": this.props.recipient_name,
            "recipient_email": this.props.recipient_email,
            "recipient_phone_number": this.props.recipient_phone_number,
            "recipient_mobility_level": this.props.recipient_mobility_level
        }
        this.props.postInfo(user)
        console.log(user);
    }
    render() {
        return (
            <>
            <h2>Thanks! We've got all we need</h2>
            <p>We'll reach out to your buddy and find a time that works for them and get back to you with an assigned time! We're excited for you to start moving!</p>
            </>
        );
    }
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps, { postInfo })(Complete)