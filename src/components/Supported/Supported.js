import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Supported.css'

class Supported extends Component {

    state = {
        support: '',
    }

    //handle input value
    handleChange = (event) => {
        this.setState({
            support: event.target.value
        });
    }

    //route to next page
    nextFeedbackPage = () => {
        this.props.history.push('/comments');
    }

    //validate input data, and send data to redux state
    submitSupport = () => {
        if (Number(this.state.support) < 1 || Number(this.state.support) > 5 || this.state.support === '' ) {
            alert ('Please enter a valid rating between 1 and 5');
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