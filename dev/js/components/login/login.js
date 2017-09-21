import React from 'react';
import {render} from 'react-dom';
import './login.scss';
import Items from '../homeScreen/Items';
import {  browserHistory } from 'react-router';

export default class login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            userEmail : '',
            password : '',
            showItemPage : false
                    }
        this.onclickLogin = this.onclickLogin.bind(this);
        this.onchangeEmail = this.onchangeEmail.bind(this);
        this.onchangePassword = this.onchangePassword.bind(this);

    }

    onclickLogin(){        
       this.props.handleViewChange("items");           
        
    }
    onchangeEmail(){
        this.setState({
            userEmail : this.state.userEmail
        });

    }
    onchangePassword(){
        this.setState({
            password : this.state.password
        })

    }

    render(){
        return(
            <div className= "container">
                       
                <div className="panel panel-default">
                    <div className="panel-heading">Login to Tesco app</div>
                    <div className="panel-body">      
                           
                        <div>
                         <input type="text" id="email" placeholder="Your Email Address" className = "login-user-input-email login-user-input" onChange={this.onchangeEmail}/>
                        </div>
                        <div>
                            <input type="text" id="password" placeholder= "Enter Password" className = "login-user-input-password login-user-input" onChange={this.onchangePassword}/>
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
