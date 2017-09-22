import React,{Component} from 'react';
import men from '../../../images/men.jpg';
import './cartView.scss';
import { connect } from 'react-redux';

class cartView extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            showInfoMessage : false
        }
        this.calculatePrice = this.calculatePrice.bind(this);
        this.goBack = this.goBack.bind(this);
        this.orderPlaced = this.orderPlaced.bind(this);
        this.showMessage = this.showMessage.bind(this);
        
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
    goBack(){
        this.props.handleViewChange('productsView');
    }
    orderPlaced(){
       
       this.setState({
           showInfoMessage:true
       })
       
    }

    showMessage(){
        let itemsStore = this.props.itemDetails; 
        if((itemsStore.menPurchaseType == 'simple') && (this.state.showInfoMessage)){
           return <h5 style={{'background':'cadetblue','fontSize': '20px'}}>Thank you for placing the order. Will be delivered shortly</h5>

       }
    }

    render(){
        return(
            <div className="container">
                <div>
                {this.showMessage()}
                </div>
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
                    <div className = "col-md-2">
                       <button className="btn btn-primary buyNowButton" style={{ width: "180px", float: "right" }}><span onClick = {this.orderPlaced}><strong>Place Order</strong></span></button>
                    </div>
                    <div className="col-md-10">
                <button onClick={this.goBack} style={{ 'fontSize': '20px', 'width': '180px', 'float': 'right'  }} className="btn btn-primary buyNowButton">
                                Back
                            </button>
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