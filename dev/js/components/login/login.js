import React from 'react';
import {render} from 'react-dom';
import './login.scss'

export default class login extends React.Component {
    render(){
        return(
            <div className= "container">          
                
                        <div>
                         <input type="text" id="email" placeholder="Your Email Address" className = "login-user-input-email login-user-input" />
                        </div>
                        <div>
                            <input type="text" id="password" placeholder= "Enter Password" className = "login-user-input-password login-user-input" />
                        </div>
                        <div>
                            <button type="button" className="login-login-button"> Log in </button>
                        </div>
                        </div>
                    
           
        )
    }
}
