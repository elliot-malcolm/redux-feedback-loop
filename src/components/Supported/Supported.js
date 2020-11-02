import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {
    state = {
        support: '',
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
        });
    }

    nextFeedbackPage = () => {
        this.props.history.push('/comments');
    }

    submitSupport = () => {
        if (Number(this.state.support) < 1 || Number(this.state.support) > 5) {
            alert ('Please enter a valid rating between 1 and 5')
        } else {
        this.props.dispatch({
            type:'SUPPORTED_FEEDBACK', payload: this.state.support})
            console.log('from submitSupport', this.state.support);
            this.nextFeedbackPage();
        }
    }

  render() {
    return (
            <div className="formInput">
                    <h1>How well are you being supported?</h1>
                    <form onSubmit={this.submitSupport}>
                    <p><input 
                    type="number"
                    placeholder="(from 1-5)"
                    onChange={this.handleChange}
                    ></input></p>
                    <button className="nextButton">Next</button>
                    </form>
            </div>
    );
  }
}

const reduxToProps = (reduxState) => ({reduxState: reduxState})

export default connect(reduxToProps)(Supported);