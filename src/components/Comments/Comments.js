import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    state = {
        comment: '',
    }

    //handle data input
    handleChange = (event) => {
        this.setState({
            comment: event.target.value
        });
    }

    //route to next page
    nextFeedbackPage = () => {
        this.props.history.push('/review');
    }

    //submit comment info to redux for storage and manipulation
    submitComment = () => {

        this.props.dispatch({
            type:'COMMENT_FEEDBACK', payload: this.state.comment})
            console.log('from submitComment', this.state.comment);
            this.nextFeedbackPage();
    }

  render() {
    return (
            <div className="formInput">
                    <h1>Any comments you want to leave?</h1>
                    <form onSubmit={this.submitComment}>
                    <p><input 
                    type="text"
                    placeholder="Comments here!"
                    onChange={this.handleChange}
                    ></input></p>
                    <button className="nextButton">Next</button>
                    </form>
            </div>
    );
  }
}

const reduxToProps = (reduxState) => ({reduxState: reduxState})

export default connect(reduxToProps)(Comments);