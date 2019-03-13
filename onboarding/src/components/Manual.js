import React from 'react';

class Manual extends React.Component {
    state = {
        time: '13:30',
        day: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        }, console.log(this.state.time))
        
    }

    render() {
        return (
            <>
            <h2>Looks like we're having a hard time finding a time that works for both of you. Let's try things the old fashioned way.</h2>
            <h3>Please call [User1] and figure out a time that works</h3>
            <h2>What time works?</h2>
            <form>
                <div>
                <input type="time" value={this.state.time} name="time" onChange={this.handleChange} />
                <span>on</span>
                    <select value={this.state.day} name="day" onChange={this.handleChange}>
                        <option> </option>
                        <option>Sunday</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
            </>
        );
    }
}

export default Manual;