import React, { Component } from 'react';
import Header from './homeScreen/Header';
import Items from './homeScreen/Items';
import Login from './login/login';

class App extends Component {
    render() {
        return (
            <div>
                <h1>hello Viresh</h1>
                <Items />
                <Login/>
            </div>
        );
    }
}

export default App;