import React,{Component} from 'react';
import men from '../../../images/men.jpg';
import './cartView.scss';
import { connect } from 'react-redux';

class cartView extends Component{
    constructor(props, context){
        super(props, context);
        this.calculatePrice = this.calculatePrice.bind(this);
    }
    calculatePrice(){
        let iteminStore = this.props.itemDetails;
        if(iteminStore.menSharePurchaseType == "share"){
            return iteminStore.menPriceShare/2
        }
        else if((iteminStore.menQuantity) == 1 && (iteminStore.menSharePurchaseType == "own")) {
            return this.props.itemDetails.menPriceAlone
            
        }
        else if((iteminStore.menQuantity == 2) && (iteminStore.menSharePurchaseType == "own")) {
            return iteminStore.menPriceShare
            
        }
    }
    render(){
        return(
            <div className="container">
                <h1>My Shopping Bag (1 Item)</h1>
                <table className="table" >
                    <thead>
                        <tr>
                            <th>  </th>
                            <th>Product Description  </th>
                            <th>Size </th>
                            <th>Qty  </th>
                            <th>Sold By  </th>
                            <th> Total Amount </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img className="img-responsive itemImageMen" src={men} />
                                </td>
                                <td>{this.props.itemDetails.menProductName}</td>
                                <td> 40</td>
                                <td>{this.props.itemDetails.menQuantity} </td>
                                <td>Wiztech Corp</td>
                                <td>{this.calculatePrice()}  </td> 
                            </tr>
                        
                    </tbody>
                </table>
                <div className="row">
                    <div className = "col-md-8">
                       <button className="btn btn-primary buyNowButton" style={{ width: "180px", float: "right" }}><span><strong>Place Order</strong></span></button>
                    </div>
                    </div>
                </div>
        )
    }

}
function mapStateToProps(state, ownProps) {
    console.log(state.itemsDetails);
     return {
        itemDetails: state.itemsDetails
    }
}

export default connect(mapStateToProps, null)(cartView);