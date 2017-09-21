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
            isLoginPageVisible : true,
            isHeaderPageVisible :false
            }
        this.showItemList = this.showItemList.bind(this);
        this.showLoginPage = this.showLoginPage.bind(this);
        this.onScreenChange = this.onScreenChange.bind(this);
        this.showHeaderPage = this.showHeaderPage.bind(this);
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
        showHeaderPage(){
            if(this.state.isHeaderPageVisible){
                return <Header/>
            }

        }
        onScreenChange(){
            this.setState({
                isItemsPageVisible : true,
                isLoginPageVisible : false,
                isHeaderPageVisible:true

            })
        }
    render() {
        return (
            <div>
                {this.showLoginPage()}
                {this.showItemList()}
                {this.showHeaderPage()}

            </div>
        );
    }
}

export default App;