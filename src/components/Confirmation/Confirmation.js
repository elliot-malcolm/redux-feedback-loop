import React, { Component } from 'react';
import { connect } from 'react-redux';


class Confirmation extends Component {
  render() {
    return (
            <div>
                <h2> Your feedback has been successfully submitted! </h2>
                {/* <button onClick=axiosPost>Submit More Feedback!<button> */}
            </div>
    );
  }
}

const reduxToProps = (reduxState) => ({reduxState: reduxState})

export default connect(reduxToProps)(Confirmation);