import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux';

class Review extends Component {
  render() {
    return (
            <h1> Review </h1>
    );
  }
}

const reduxToProps = (reduxState) => ({reduxState: reduxState})

export default connect(reduxToProps)(Review);