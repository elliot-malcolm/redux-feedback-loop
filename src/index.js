import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';


//reducer responds to feedback dispatches
const feedbackData = (state = {}, action) => {
    if (action.type === 'FEELINGS_FEEDBACK'){
        console.log('payload', action.payload);
        return {...state, feeling: action.payload}
    }
    else if (action.type === 'UNDERSTANDING_FEEDBACK'){
        console.log('payload', action.payload);
        return {...state, understanding: action.payload}
    }
    else if (action.type === 'SUPPORTED_FEEDBACK'){
        console.log('payload', action.payload);
        return {...state, support: action.payload}
    }
    else if (action.type === 'COMMENT_FEEDBACK'){
        console.log('payload', action.payload);
        return {...state, comment: action.payload}
    }
    //reducer clears inputs upon ping
    else if (action.type === 'CLEAR_INPUTS'){
        return {}
    } 
    else {return state
    }
}

//establish reduxStore
const reduxStore = createStore (
    combineReducers({
    feedbackData,
    }),
    applyMiddleware(logger)
  );

  ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));