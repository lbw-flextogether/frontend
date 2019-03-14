import React from 'react';
import Slot from './Slot';
import { generateTimeslots } from './generateTimeslots';

import '../../assets/styles/Day.css';

class Day extends React.Component {
    state = {
        scroll: 0,
    }

    scrollDown = () => {
        this.setState({ scroll: this.state.scroll + 275 }, () => this.refs.time.scrollTop = this.state.scroll)
    }

    scrollUp = () => {
        this.setState({ scroll: this.state.scroll - 275 }, () => this.refs.time.scrollTop = this.state.scroll)
    }
    
    render() {
        const timeSlots = generateTimeslots(30, '06:00', '23:00')
        return(
            <div className="slick-slide">
            <h3>{this.props.day}</h3>
            <div className='time-slots-container'>
                <div 
                    className='time-slots'
                    ref="time"
                >
                    {timeSlots.map(slot => <Slot day={this.props.day} slot={slot} key={slot} selectTime={this.props.selectTime}/>)}
                </div>
                {this.state.scroll === 0 ?
                <div onClick={this.scrollDown} className="scroll">Later times 	&#128899;</div> :
                this.state.scroll >= 500 ?
                <div onClick={this.scrollUp} className="scroll">Earlier times &#128897;</div> :
                <div className="scroll"><span onClick={this.scrollUp}>&#128897;</span><span onClick={this.scrollDown}>	&#128899;</span></div>}
            </div>
            </div>
        );
    }
}

export default Day;