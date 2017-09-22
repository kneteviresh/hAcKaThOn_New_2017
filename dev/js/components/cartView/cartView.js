import React, { Component } from 'react';
import men from '../../../images/men.jpg';
import './cartView.scss';
import { connect } from 'react-redux';

class cartView extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isStatusVisibleViresh: false,
            isStatusVisiblekavitha: false,
            showInfoMessage : false
        }
        this.calculatePrice = this.calculatePrice.bind(this);
        this.handlePayment = this.handlePayment.bind(this);
        this.goBack = this.goBack.bind(this);
        this.orderPlaced = this.orderPlaced.bind(this);
        this.showMessage = this.showMessage.bind(this);
        
    }
    calculatePrice() {
        var user = this.getCookie("userName");
        if (user == "viresh")
            var newUser = "kavitha"
        else
            var newUser = "viresh"
        var userDetails = this.props.itemDetails[newUser];

        let iteminStore = this.props.itemDetails;
        if (iteminStore.menSharePurchaseType == "share" || userDetails.requested) {
            return iteminStore.menPriceShare / 2
        }
        else if ((iteminStore.menQuantity) == 1 && (iteminStore.menSharePurchaseType == "own")) {
            return this.props.itemDetails.menPriceAlone

        }
        else if ((iteminStore.menQuantity == 2) && (iteminStore.menSharePurchaseType == "own")) {
            return iteminStore.menPriceShare
        }
    }
    getCookie(name) {
        var regexp = new RegExp("(?:^" + name + "|;\s*" + name + ")=(.*?)(?:;|$)", "g");
        var result = regexp.exec(document.cookie);
        return (result === null) ? null : result[1];
    }

    orderPlaced(){
        this.setState({
            showInfoMessage:true
        })
        
     } 

    handlePayment() {
        var user = this.getCookie("userName");
        var component;
        var userDetails = this.props.itemDetails[user];
        if (user == "viresh") {
            this.setState({
                isStatusVisibleViresh: true,
                isStatusVisiblekavitha: false
            });
        }
        else {
            this.setState({
                isStatusVisibleViresh: false,
                isStatusVisiblekavitha: true
            });
        }

        this.props.updatePaymentDetails(user)
    }

    showMessage(){
        let itemsStore = this.props.itemDetails;
        if((itemsStore.menPurchaseType == 'simple') && (this.state.showInfoMessage)){
            return <h5 style={{'background':'cadetblue','fontSize': '20px'}}>Thank you for placing the order. Will be delivered shortly</h5>

        }
    }
    goBack(){
        this.props.handleViewChange('items')
    }

    render() {
        
        var user = this.getCookie("userName");
        if (user == "viresh")
            var newUser = "kavitha"
        else
            var newUser = "viresh"
        var userDetails = this.props.itemDetails[newUser];
        var orderStatusStyle = {
            float: 'right',
            color: userDetails.paymentDone ? 'green' : 'orange'
        }
        var orderStatus = this.props.itemDetails[user].paymentDone ? this.props.itemDetails[user].ordeStatus : this.props.itemDetails[user].ordeStatus
        return (
            <div className="container">
                {this.showMessage()}
                <h1>My Shopping Bag (1 Item)
                    {this.state.isStatusVisibleViresh && <span style={{ 'float': 'right' }}>order Status :<span style={orderStatusStyle}> {orderStatus}</span></span>}
                    {this.state.isStatusVisiblekavitha && <span style={{ 'float': 'right' }}>order Status :<span style={orderStatusStyle}> {orderStatus}</span></span>}
                </h1>
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
                    <div className="col-md-8">
                        <button onClick={this.handlePayment} className="btn btn-primary buyNowButton" style={{ width: "auto", float: "right" }}><span><strong>Make payment and Place Order</strong></span></button>
                    <div className = "col-md-2">
                       <button onClick={this.goBack} className="btn btn-primary buyNowButton" style={{ width: "180px", float: "right" }}><span  ><strong>Back</strong></span></button>
                    </div>
                    <div className="col-md-10">
                {/* <button onClick={this.goBack} style={{ 'fontSize': '20px', 'width': '180px', 'float': 'right'  }} className="btn btn-primary buyNowButton">
                                Back
                            </button> */}
                </div>
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

function mapDispatchToProps(dispatch) {
    return {
        updatePaymentDetails: (user) => {
            dispatch({
                type: 'UPDATE_PAYMENT_DETAILS', user
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cartView);