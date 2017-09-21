import React, { Component } from 'react';
import './SelectedProduct.scss';
import men from '../../../images/men.jpg';
import women from '../../../images/women.jpg';

class SelectedProduct extends Component {
    constructor(props, context) {
         super(props, context);
        this.state = {
            shareDivVisible : false
        }
        super(props, context);
            this.renderButtons = this.renderButtons.bind(this);
            this.shareDetails = this.shareDetails.bind(this);
    }
    
    shareDetails(){
        this.setState({
            shareDivVisible:!this.state.shareDivVisible
        });
    }
    getShareDiv(){
        var sharedDiv;
        if(this.state.shareDivVisible){
        sharedDiv = 
        <div>
            <h1>user1 </h1>
        </div>
        }
        else{
            sharedDiv = '';
        }
        return sharedDiv;
    }
    renderButtons(){
    
    }
    render() {
        return (
            <div className="boldFont">
                <div className="container" style={{ marginTop: "200px"}}>
                    <div className="row">
                    <div className="col-md-2">
                        <img className="img-responsive resizeImage" src={men} />
                    </div>
                    <div className="col-md-6">
                        <table>
                        <tr>
                           <td className="marginItem"> ItemDescription:</td>
                           <td> Proline: Men T-shirt</td>
                        </tr>
                        <tr className="marginItem">
                           <td> Price: </td>
                           <td>  </td>
                        </tr >
                         <tr className="marginItem">
                           <td> Quantity: </td>
                           <td>   </td>
                        </tr>
                        </table>
                    </div>
                    <div className="col-md-4">
             
            </div>
                    </div>
              <div style={{marginTop: "50px"}}><button type="button" className="btn btn-primary" onClick={this.shareDetails}>Share n Save</button>
            {this.getShareDiv()}
            <button type="button" style={{marginLeft: "50px"}}>Buy Now</button>
                     </div>  
                </div>
            </div>
        );
    }
}

export default SelectedProduct;