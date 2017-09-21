import React, { Component } from 'react';
import Login from './login/login';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Share and Save From <mark>LocalGhosts</mark></h1>
                <Login/>
            </div>
        );
    }
}

export default App;