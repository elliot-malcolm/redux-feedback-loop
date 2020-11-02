import React, { Component } from 'react';
import { connect } from 'react-redux';


class Confirmation extends Component {

  //route to next page
  nextFeedbackPage = () => {
    this.props.history.push('/');
}
  
  //trigger redux to clear inputs
  restartFeedback = () => {
    this.props.dispatch({
    type:'CLEAR_INPUTS' })
    this.nextFeedbackPage();
}

  render() {
    return (
            <div>
                <h2> Your feedback has been successfully submitted! </h2>
                <button onClick={this.restartFeedback}>Submit More Feedback!</button>
            </div>
    );
  }
}

const reduxToProps = (reduxState) => ({reduxState: reduxState})

export default connect(reduxToProps)(Confirmation);