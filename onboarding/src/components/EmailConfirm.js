import React from 'react';
import { connect } from 'react-redux';
import { confirmEmail } from '../actions';

class EmailConfirm extends React.Component {
    componentDidMount() {
        this.props.confirmEmail(this.props.match.params.id)
    }
    render() {
        return (
            <>
            <h2>Thank you for confirming your email!</h2>
            <p>An email has been sent to your companion for them to select a time based on your availability. Once they choose a time, you will be sent an email confirmation</p>
            </>
        );
    }
}

export default connect(null, { confirmEmail })(EmailConfirm);