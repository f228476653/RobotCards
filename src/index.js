import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'
//import Hello from '../components/Hello';
import App from './containers/App'; //asume it is '.js',if there's no '.css'
import * as serviceWorker from './serviceWorker';
//import CardList from '../components/CardList'
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots,requestRobots })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); 
//It should only be one store in a project
//You'll have lots of reducers in your application ,
//but you have to create a root reducer, 
//than use root reducer to create the store

ReactDOM.render(
    <Provider store= {store}>
        <App />
    </Provider>, document.getElementById('root'));
//ReactDOM.render(<Hello />, document.getElementById('root'));
//ReactDOM.render(<CardList robots={robots}/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
