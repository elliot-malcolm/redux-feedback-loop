import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Understanding.css'

class Understanding extends Component {

    state = {
        understanding: '',
    }

     //handle input value
    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        });
    }

    //route to next page
    nextFeedbackPage = () => {
        this.props.history.push('/supported');
    }

    //validate input data, and send data to redux state
    submitUnderstanding = () => {
        if (Number(this.state.understanding) < 1 || Number(this.state.understanding) > 5 || this.state.understanding === '' ) {
            alert ('Please enter a valid rating between 1 and 5')
        } else {
        this.props.dispatch({
            type:'UNDERSTANDING_FEEDBACK', payload: this.state.understanding})
            console.log('from submitUnderstanding', this.state.understanding);
            this.nextFeedbackPage();
        }
    }

  render() {
    return (
            <div className="formInput">
                    <h1>How well are you understanding the content?</h1>
                    <form onSubmit={this.submitUnderstanding}>
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

export default connect(reduxToProps)(Understanding);