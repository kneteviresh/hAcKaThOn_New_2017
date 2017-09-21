import React, { Component } from 'react';
import Header from './homeScreen/Header';
import Items from './homeScreen/Items';
import Login from './login/login';
import Cart from './cartView/cartView';
import SelectedProduct from './productView/SelectedProduct';


class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isItemsPageVisible: false,
            isLoginPageVisible: true,
            isHeaderPageVisible: false,
            visibleComponent: "login"
        }
        this.onScreenChange = this.onScreenChange.bind(this);
        this.handleProceedButton = this.handleProceedButton.bind(this);
    }

    handleProceedButton() {
        this.setState({
            visibleComponent: "cart"
        });
    }

    onScreenChange() {
        this.setState({
            visibleComponent: "items"
        })
    }
 

    getComponent() {
        debugger 
        var visibleComponent;
        switch (this.state.visibleComponent) {
            case 'login':
                visibleComponent = <Login screenChange={this.onScreenChange} />
                break;
            case 'items':
                visibleComponent = <Items handleProceedButton={this.handleProceedButton} />
                break;
            case 'cart':
                visibleComponent = <Cart/>
                break;
            default:
                visibleComponent = <Login screenChange={this.onScreenChange} />
                break;
        }
        return visibleComponent;
    }

    render() {
        return (
            <div>
                {this.getComponent()}
            </div>
        );
    }
}

export default App;