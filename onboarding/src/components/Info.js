import React from 'react';
import { connect } from 'react-redux';
import { addInfo } from '../actions';

import '../assets/styles/Info.css';

class Info extends React.Component {
    state = {
        user: {
            name: '',
            email: '',
            phone: '',
            notification: '',
            mobility: null,
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
        this.props.addInfo(this.state.user);
        this.props.history.push('/time')
    }

    render() {
        return (
            <section className="info">
            <h2>Tell us a bit more...</h2>
            <form>
                <label htmlFor="name">Your First Name</label>
                <input 
                    type="text" 
                    placeholder="e.g. Janet"
                    name="name"
                    value={this.state.user.name}
                    onChange={this.handleChanges}
                    id="name" 
                />
                <label htmlFor="email">Your Email Address</label>
                <input 
                    type="email" 
                    placeholder="e.g. janet@google.com" 
                    name="email"
                    value={this.state.user.email}
                    onChange={this.handleChanges}
                    id="email"
                />
                <label htmlFor="phone">Your Telephone Number</label>
                <input 
                    type="tel" 
                    placeholder="e.g. 555-867-5309"
                    name="phone"
                    value={this.state.user.phone}
                    onChange={this.handleChanges} 
                    id="phone"
                />
                <label htmlFor="notification">I prefer to receive notifications by</label>
                <select 
                    value={this.state.user.notification} 
                    onChange={this.handleChanges} 
                    name="notification"
                    id="notification"
                >
                    <option value="EmailAndText">Email & Text</option>
                    <option value="Email">Email Only</option>
                    <option value="Text">Text Message Only</option>
                </select>
                <p>Mobility Level (choose one)</p>
                <div className="mobility-btns">
                    <button 
                        value="Low" 
                        onClick={this.handleMobility}
                        className={this.state.user.mobility === "Low" ? 'active' : null}
                    >
                    Low
                    </button>
                    <button 
                        value="Medium" 
                        onClick={this.handleMobility}
                        className={this.state.user.mobility === "Medium" ? 'active' : null}
                    >
                    Medium
                    </button>
                    <button 
                        value="High" 
                        onClick={this.handleMobility}
                        className={this.state.user.mobility === "High" ? 'active' : null}
                    >
                    High
                    </button>
                </div>
                { this.state.user.mobility ?
                <button onClick={this.handleNext} className="next-btn">Next</button> :
                null }
            </form>
            </section>
        );
    }
}

export default connect(null, { addInfo })(Info);