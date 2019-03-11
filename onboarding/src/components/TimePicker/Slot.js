import React from 'react';

class Slot extends React.Component {
    state = {
        clicked: false,
    }

    handleClick = e => {
        this.setState({
            clicked: !this.state.clicked
        })
        this.props.selectTime(this.props.slot);
    }

    render() {
        return (
            <div onClick={this.handleClick} className={!this.state.clicked ? 'slot' : 'selected-slot'}>{this.props.slot}</div>
        );
    }
}

export default Slot;