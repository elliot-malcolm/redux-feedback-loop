import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class Review extends Component {

//route to next page
nextFeedbackPage = () => {
    this.props.history.push('/confirmation');
}

//send data to serve via POST, send user to next page and log errors
submitFeedback = () => {
    Axios.post( '/feedbackrepo', this.props.reduxState.feedbackData ).then ((response) => {
        this.nextFeedbackPage();
    }).catch((error)=>{
        console.log(error);
    })
    }

    //display reduxState collected review data on DOM 
  render() {
    return (
            <div className='reviewInfo'>
                <h2> Review your answers! </h2>
                <p>How are you feeling today:<br></br> {this.props.reduxState.feedbackData.feeling}</p>
                <p>How well are you understanding the content: <br></br>{this.props.reduxState.feedbackData.understanding}</p>
                <p>How well are you being supported: <br></br>{this.props.reduxState.feedbackData.support}</p>
                <p>Your comments: <br></br>{this.props.reduxState.feedbackData.comment}</p>
                <button onClick={this.submitFeedback}>Submit</button>
            </div>
    );
  }
}

const reduxToProps = (reduxState) => ({reduxState: reduxState})

export default connect(reduxToProps)(Review);