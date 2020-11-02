import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';

// const feedbackData 
    // if action type = FEELING
    // takes in payload

    // else if action type = UNDERSTANDING
    // takes in payload
    
    // else if action type = COMMENTS
    // takes in payload

    // else if action type = SUPPORTED
    // takes in payload

    
const reduxStore = createStore (
    combineReducers({
    }),
    applyMiddleware(logger)
  );

  ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
