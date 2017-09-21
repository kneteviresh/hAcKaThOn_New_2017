import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from "redux";
import allReducers from "./reducers/index";
import TodoList from "./components/TodoList";
import { composeWithDevTools } from 'redux-devtools-extension'; 

const store= createStore(allReducers,undefined,composeWithDevTools());
ReactDOM.render(<Provider store={store}>
<TodoList />
</Provider>,
       document.getElementById('root')
);
