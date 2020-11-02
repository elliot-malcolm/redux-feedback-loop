import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        feeling: '',
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        });
    }

    nextFeedbackPage = () => {
        this.props.history.push('/Understanding');
    }

    submitFeels = () => {
        if (Number(this.state.feeling) < 1 || Number(this.state.feeling) > 5) {
            alert ('Please enter a valid rating between 1 and 5')
        }
        else if (this.state.feeling = '') {
            alert ('Please enter a rating for your feels!')
        } else {
        this.props.dispatch({
            type:'FEELINGS_FEEDBACK', payload: this.state.feeling})
            console.log('from submitFeels', this.state);
            this.nextFeedbackPage();
        }
    }

    // [] submitFeels dispatches value to redux prop 
        // [√]handleChange to assign data to state
        // [√] nextPageRoute routes to next page 

  render() {
    return (
            <div className="formInput">
                    <h1>How are you feeling after today?</h1>
                    <form onSubmit={this.submitFeels}>
                    <label htmlFor='Feeling'>
                        How are you feeling?
                    </label>
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

export default connect(reduxToProps)(Feeling);