import React, { Component } from 'react';
import Header from './homeScreen/Header';
import Items from './homeScreen/Items';
import Login from './login/login';
import SelectedProduct from './productView/SelectedProduct';

class App extends Component {
    render() {
        return (
            <div>
                {/* <Header />
                <Items />
                <Login/>  */}
                <SelectedProduct />
            </div>
        );
    }
}

export default App;