import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Hello from '../components/Hello';
import App from './containers/App'; //asume it is '.js',if there's no '.css'
import * as serviceWorker from './serviceWorker';
//import CardList from '../components/CardList'
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Hello />, document.getElementById('root'));
//ReactDOM.render(<CardList robots={robots}/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
