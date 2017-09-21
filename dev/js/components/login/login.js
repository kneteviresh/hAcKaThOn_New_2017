import React from 'react';
import {render} from 'react-dom';
import './login.scss';
import Items from '../homeScreen/Items';
import {  browserHistory } from 'react-router';

export default class login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            userEmail : 'kavitha.vikas@gmail.com',
            password : 'test',
            showItemPage : false
                    }
        this.onclickLogin = this.onclickLogin.bind(this);
        this.onchangeEmail = this.onchangeEmail.bind(this);
        this.onchangePassword = this.onchangePassword.bind(this);

    }

    onclickLogin(){  
        document.cookie = `userName=${this.state.userEmail};path=/`;      
       this.props.handleViewChange("items");           
        
    }
    onchangeEmail(e){
        this.setState({
            userEmail : e.target.value
        });

    }
    onchangePassword(e){
        this.setState({
            password : e.target.value
        })

    }

    render(){
        return(
            <div className= "container">
                       
                <div className="panel panel-default">
                    <div className="panel-heading">Login to Tesco app</div>
                    <div className="panel-body">      
                           
                        <div>
                         <input type="text" id="email" placeholder="Your Email Address" className = "login-user-input-email login-user-input" onChange={this.onchangeEmail} value = {this.state.userEmail}/>
                        </div>
                        <div>
                            <input type="text" id="password" placeholder= "Enter Password" className = "login-user-input-password login-user-input" onChange={this.onchangePassword} value = {this.state.password}/>
                        </div>
                        <div>
                            <button type="button" className="login-login-button" onClick={this.onclickLogin}> Log in </button>
                        </div>
                    </div>
                </div>

                
                  
            </div>
                         
           
        )
    }
}
