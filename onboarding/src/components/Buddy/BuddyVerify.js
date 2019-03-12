import React from 'react';

class BuddyVerify extends React.Component {
    state = {
        user: {
            name: 'Name pulled from GET',
            email: 'Email pulled from GET',
            phone: 'Phone pulled from GET',
            mobility: undefined,
            timezone: 'Time zone pulled from GET'
        }
    }

    handleChanges = e => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value,
            }
        })
    }

    handleMobility = e => {
        e.preventDefault();
        this.setState({
            user: {
                ...this.state.user,
                mobility: e.target.value,
            }
        })
    }

    handleNext = e => {
        e.preventDefault();
        this.props.history.push('/confirm')
    }

    render() {
        return (
            <>
            <h2>We're glad to see you're interested in working out with {'{User 1}'}!</h2>
            <p>Please confirm your information below.</p>
            <form>
                <input 
                    type="text" 
                    placeholder="Name"
                    name="name"
                    value={this.state.user.name}
                    onChange={this.handleChanges} 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    name="email"
                    value={this.state.user.email}
                    onChange={this.handleChanges}
                />
                <input 
                    type="tel" 
                    placeholder="Telephone Number"
                    name="phone"
                    value={this.state.user.phone}
                    onChange={this.handleChanges} 
                />
                <label>I prefer to receive notifications by</label>
                <select 
                    value={this.state.user.notification} 
                    onChange={this.handleChanges} 
                    name="notification"
                >
                    <option value="EmailAndText">Email & Text</option>
                    <option value="Email">Email Only</option>
                    <option value="Text">Text Message Only</option>
                </select>
                <label>Please select your Time Zone:</label>
                <select>
                    <option>Time Zones</option>
                </select>
                <p>Mobility Level (choose one)</p>
                <button value="low" onClick={this.handleMobility}>Low</button>
                <button value="medium" onClick={this.handleMobility}>Medium</button>
                <button value="high" onClick={this.handleMobility}>High</button>
                <button onClick={this.handleNext}>Next</button>
            </form>
            </>
        );
    }
}

export default BuddyVerify;