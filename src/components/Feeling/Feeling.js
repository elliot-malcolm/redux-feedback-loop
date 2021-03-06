import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Feelings.css'

class Feeling extends Component {

    state = {
        feeling: '',
    }

     //handle input value
    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        });
    }

    //route to next page
    nextFeedbackPage = () => {
        this.props.history.push('/understanding');
    }

    //validate input data, and send data to redux state
    submitFeels = () => {
        if (Number(this.state.feeling) < 1 || Number(this.state.feeling) > 5 || this.state.feeling === '' ) {
            alert ('Please enter a valid rating between 1 and 5')
        }
        else {        
            this.props.dispatch({
            type:'FEELINGS_FEEDBACK', payload: this.state.feeling})
            this.nextFeedbackPage();
        }
    }

  render() {
    return (
            <div className="formInput">
                    <h1>How are you feeling today?</h1>
                    <form onSubmit={this.submitFeels}>
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