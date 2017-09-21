import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import allReducers from "./reducers/index";
import App from "./components/App";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Login from '../js/components/login/Login';
import ProductView from '../js/components/ProductView/SelectedItems';

const store = createStore(allReducers, undefined, composeWithDevTools());
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
