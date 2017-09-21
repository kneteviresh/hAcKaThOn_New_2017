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
            this.handleViewChange = this.handleViewChange.bind(this);
        }

        handleViewChange(newView) {
            this.setState({
                visibleComponent: newView
            });
        }

        getComponent() {
            var visibleComponent;
            switch (this.state.visibleComponent) {
                case 'login':
                    visibleComponent = <Login handleViewChange={this.handleViewChange} />
                    break;
                case 'items':
                    visibleComponent = <Items handleViewChange={this.handleViewChange} />
                    break;
                case 'productsView':
                    visibleComponent = <SelectedProduct handleViewChange={this.handleViewChange} />
                    break;
                default:
                    visibleComponent = <Login handleViewChange={this.handleViewChange} />
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