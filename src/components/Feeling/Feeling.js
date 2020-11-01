import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux';

class Feeling extends Component {

    //handleChange dispatch 
    //submitFeels

  render() {
    return (
            <div className="formInput">
                    <h1>How are you feeling after today?</h1>
                    <form onSubmit={this.submitFeels}>
                    <label>
                        Feeling?
                    </label>
                    <p><input 
                    type="number"
                    placeholder="Feels (1-5)"
                    onChange={this.changeDistance}
                    ></input></p>
                    <button className="nextButton">Next</button>
                    </form>
            </div>
    );
  }
}

const reduxToProps = (reduxState) => ({reduxState: reduxState})

export default connect(reduxToProps)(Feeling);