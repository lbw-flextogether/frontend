import React from 'react';
import { connect } from 'react-redux';
import { getBuddy } from '../../actions';
import Loader from 'react-loader-spinner';

class BuddyVerify extends React.Component {
    state = {
        user1: null,
        user: {
            name: '',
            email: '',
            phone: '',
            mobility: '',
        }
    }

    componentDidMount() {
        this.props.getBuddy(this.props.match.params.id)
            .then(() => this.setState({
                user1: this.props.user1,
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
        this.props.history.push(`/invite/${this.props.match.params.id}/confirm`)
    }

    render() {
        if (!this.state.user1) {
        return (
            <div className="loader">
                <Loader type="ThreeDots" color="#279CCF"/>
            </div>
        )} else {
        return (
            <section className="info">
            <h2>We're glad to see you're interested in working out with {this.props.user1}!</h2>
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
                {/* <label>I prefer to receive notifications by</label>
                <select 
                    value={this.state.user.notification} 
                    onChange={this.handleChanges} 
                    name="notification"
                >
                    <option value="EmailAndText">Email & Text</option>
                    <option value="Email">Email Only</option>
                    <option value="Text">Text Message Only</option>
                </select> */}
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
                <button onClick={this.handleNext} className="next-btn">Next</button>
            </form>
            </section>
        );}
    }
}

const mapStateToProps = state => ({
    user1: state.name,
    name: state.recipient_name,
    email: state.recipient_email,
    phone: state.recipient_phone_number,
    mobility: state.recipient_mobility_level
})

export default connect(mapStateToProps, { getBuddy })(BuddyVerify);