import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux';
import Feeling from '../Feeling/Feeling';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Understanding from '../Understanding/Understanding';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Tell us how we're doin!</i></h4>
          </header>
          <Feeling/>
          <Supported/>
          <Comments/>
          <Understanding/>
          <br/>
        </div>
        <Route exact path="/" component={Feeling}/>
      </Router>
    );
  }
}

const reduxToProps = (reduxState) => ({reduxState: reduxState})

export default connect(reduxToProps)(App);
