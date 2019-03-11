import React from 'react';

class Slot extends React.Component {
    state = {
        clicked: false,
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        },
        () => {this.props.selectTime(this.props.day, this.props.slot, this.state.clicked)})
        
    }

    render() {
        return (
            <div onClick={() => this.handleClick()} className={!this.state.clicked ? 'slot' : 'selected-slot'}>{this.props.slot}</div>
        );
    }
}

export default Slot;