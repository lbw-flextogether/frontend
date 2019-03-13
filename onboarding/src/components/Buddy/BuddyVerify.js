import React from 'react';
import { connect } from 'react-redux';
import { getBuddy } from '../../actions';

class BuddyVerify extends React.Component {
    state = {
        user: {
            name: '',
            email: '',
            phone: '',
            mobility: '',
            timezone: 'Time zone pulled from GET'
        }
    }

    componentDidMount() {
        this.props.getBuddy(this.props.match.params.id)
            .then(() => this.setState({
                user: {
                    name: this.props.name,
                    email: this.props.email,
                    phone: this.props.phone,
                    mobility: this.props.mobility
                }
            }))
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

const mapStateToProps = state => ({
    name: state.recipient_name,
    email: state.recipient_email,
    phone: state.recipient_phone_number,
    mobility: state.recipient_mobility_level
})

export default connect(mapStateToProps, { getBuddy })(BuddyVerify);