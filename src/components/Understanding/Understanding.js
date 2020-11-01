import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux';

class Understanding extends Component {
  render() {
    return (
            <h1> Understanding </h1>
    );
  }
}

const reduxToProps = (reduxState) => ({reduxState: reduxState})

export default connect(reduxToProps)(Understanding);