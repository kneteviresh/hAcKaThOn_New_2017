import React, { Component } from 'react';
import Header from './homeScreen/Header';
import Items from './homeScreen/Items';
import Login from './login/login';

class App extends Component {
    constructor(props,context)
    {
        super(props, context);
        this.state = {
            isItemsPageVisible : false,
            isLoginPageVisible : true
            }
        this.showItemList = this.showItemList.bind(this);
        this.showLoginPage = this.showLoginPage.bind(this);
        this.onScreenChange = this.onScreenChange.bind(this);
    }
        showItemList(){
            if(this.state.isItemsPageVisible){
                return <Items/>
            }
        }
        showLoginPage(){
            if(this.state.isLoginPageVisible){
                return <Login screenChange = {this.onScreenChange}/>
            }
        }
        onScreenChange(){
            this.setState({
                isItemsPageVisible : true,
                isLoginPageVisible : false

            })
        }
    render() {
        return (
            <div>
                {this.showLoginPage()}
                {this.showItemList()}

            </div>
        );
    }
}

export default App;