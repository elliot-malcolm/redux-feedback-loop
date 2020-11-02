import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux';
import Feeling from '../Feeling/Feeling';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Understanding from '../Understanding/Understanding';
import Review from '../Review/Review';
import FeedbackStart from '../FeedbackStart/FeedbackStart';

class App extends Component {

  //axios post to database


  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Tell us how we're doin!</i></h4>
          </header>
          {/* <Feeling/>
          <Supported/>
          <Comments/>
          <Understanding/>
          <FeedbackStart/> */}
          {/* <Review/> */}
          <br/>
        </div>
        <Route exact path="/" component={FeedbackStart}/>
        <Route path="/feeling" component={Feeling}/>
        <Route path="/understanding" component={Understanding}/>
        <Route path="/supported" component={Supported}/>
        <Route path="/comments" component={Comments}/>
        <Route path="/review" component={Review}/>
        <Route path="/confirmation" component={Confirmation}
      </Router>
    );
  }
}

const reduxToProps = (reduxState) => ({reduxState: reduxState})

export default connect(reduxToProps)(App);
