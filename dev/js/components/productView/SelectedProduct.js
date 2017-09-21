import React, { Component } from 'react';
import './SelectedProduct.scss';

class SelectedProduct extends Component {
    render() {
        return (
            <div className="boldFont">
                <div className="container" style={{marginTop :"200px"}}>
                    <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <tr className="marginItem">
                           <td className="marginItem"> ItemDescription:</td>
                           <td>   PoloShirt</td>
                        </tr>
                        <tr className="marginItem">
                           <td> Price: </td>
                           <td>  PoloShirt</td>
                        </tr >
                         <tr className="marginItem">
                           <td> Quantity: </td>
                           <td>   PoloShirt</td>
                        </tr>
                    </div>
                    <div className="col-md-3"></div>
                     </div>  
                </div>
                            
            </div>
        );
    }
}

export default SelectedProduct;