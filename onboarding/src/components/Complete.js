import React from 'react';
import { connect } from 'react-redux';

class Complete extends React.Component {
    componentDidMount () {
        console.log(this.props);
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

export default connect(mapStateToProps, {  })(Complete)