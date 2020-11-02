import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeedbackStart extends Component {

    nextFeedbackPage = () => {
        this.props.history.push('/feeling');
    }


  render() {
    return (
            <div className="formInput">
                    <h1>Ready to give some feedback?</h1>
                    <button className="nextButton" onClick={this.nextFeedbackPage}>Next</button>
                
            </div>
    );
  }
}

const reduxToProps = (reduxState) => ({reduxState: reduxState})

export default connect(reduxToProps)(FeedbackStart);