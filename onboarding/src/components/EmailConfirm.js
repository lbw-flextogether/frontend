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
            </>
        );
    }
}

export default connect(null, { confirmEmail })(EmailConfirm);