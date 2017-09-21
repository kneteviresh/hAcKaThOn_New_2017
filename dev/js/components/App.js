import React, { Component } from 'react';
import Header from './homeScreen/Header';
import Items from './homeScreen/Items';
import Login from './login/login';


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
            visibleComponent: "items"
        });
    }

    onScreenChange() {
        this.setState({
            visibleComponent: "items"
        })
    }

    getComponent() {
        var visibleComponent;
        switch (this.state.visibleComponent) {
            case 'login':
                visibleComponent = <Login screenChange={this.onScreenChange} />
                break;
            case 'items':
                visibleComponent = <Items handleProceedButton={this.handleProceedButton} />
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