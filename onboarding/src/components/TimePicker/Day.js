import React from 'react';
import Slot from './Slot';
import { generateTimeslots } from './generateTimeslots';

class Day extends React.Component {
    state = {
        selectedTimes: [],
    }

    selectTime = time => {
        const selectedTimes = [...this.state.selectedTimes]
        selectedTimes.push(time)
        this.setState({
            selectedTimes: selectedTimes
        });
        this.props.selectTime(this.props.day, this.state.selectedTimes);
    }
    
    render() {
        const timeSlots = generateTimeslots(30, '06:00', '23:00')
        return(
            <div>
            <h3>{this.props.day}</h3>
            <div>
                <div className='time-slots'>{timeSlots.map(slot => <Slot day={this.props.day} slot={slot} key={slot} selectTime={this.props.selectTime}/>)}</div>
                <div>Later times &#8681;</div>
            </div>
            </div>
        );
    }
}

export default Day;