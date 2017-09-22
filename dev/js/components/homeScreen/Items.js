import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import './homescreen.scss';
import men from '../../../images/men.jpg';
import women from '../../../images/women.jpg';
import { connect } from 'react-redux';

class Products extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            purchaseTypeMen: "simple",
            purchaseTypeWomen: "simple",
            purchaseMenPromo: "threshold",
            purchaseWomenPromo: "simple",
            menPrice: 1000,
            menPriceShare: 1500,
            womenPrice: 699,
            womenPriceShare: 1000,
            shareMen: 2,
            shareWomen: 0,
            isMenMultiBuy: true,
            isWomenMultibuy: false
        };
        this.onPurchaseTypeChangeMen = this.onPurchaseTypeChangeMen.bind(this);
        this.onPurchaseTypeChangeWomen = this.onPurchaseTypeChangeWomen.bind(this);
        this.goToCart = this.goToCart.bind(this);
        this.handleProceedButton = this.handleProceedButton.bind(this);
    }

    onPurchaseTypeChangeMen(value) {
        this.setState({
            purchaseTypeMen: value
        });
        this.props.updatePurchaseTypeMen(value);
    }

    onPurchaseTypeChangeWomen(value) {
        this.setState({
            purchaseTypeWomen: value
        });
        this.props.updatePurchaseTypeWomen(value);
    }

    handleProceedButton() {
        if (this.state.purchaseTypeMen == "simple")
            this.props.handleViewChange("cartView")
        else
            this.props.handleViewChange("productsView")
    }

    getCookie(name) {
        var regexp = new RegExp("(?:^" + name + "|;\s*" + name + ")=(.*?)(?:;|$)", "g");
        var result = regexp.exec(document.cookie);
        return (result === null) ? null : result[1];
    }


    getCheckoutButton() {
        return <button className="btn btn-primary buyNowButton" onClick={this.handleProceedButton}><span><strong>Proceed</strong></span></button>
    }
    goToCart() {
        this.props.handleViewChange("cartView")
    }

    render() {
        var user = this.getCookie("userName");
        var component;
        var userDetails = this.props.itemDetails[user];
        if (userDetails.requested) {
            var starVisible = true;
        }
        else {
            var starVisible = false
        }
        return (
            <div className="container">
                <div className="col-md-5 productDiv">
                    <a className="shareRequests"><div onClick={this.onSeeShareRequests}><p></p></div></a>
                    <div className="productImage">
                        <img className="img-responsive itemImage" src={men} />
                    </div>
                    <h3>Proline: Men T-shirt
                       {starVisible && <span style={{ 'color': 'blue', 'float': 'right' }} className="glyphicon glyphicon-star"></span>}</h3>
                    <h4> buy 1 @ 1000 / buy 2 @ Rs : 1500</h4>
                    <div className="radioButtons">
                        <RadioGroup onChange={this.onPurchaseTypeChangeMen} horizontal>
                            <RadioButton rootColor={"black"} pointColor={"blue"} value="simple">
                                Buy single
                            </RadioButton>
                            <RadioButton rootColor={"black"} pointColor={"blue"} value="threshold">
                                Buy Multiple
                            </RadioButton>
                        </RadioGroup>
                    </div>
                    <div className="priceDetails">
                        <div className="col-md-6">
                            <span style={{ 'fontSize': '30px' }}>{this.state.purchaseTypeMen == "simple" ? this.state.menPrice : (this.state.menPriceShare / 2)}</span>
                        </div>
                        <div className="col-md-6">
                            {this.getCheckoutButton()}
                        </div>
                    </div>
                </div>
                <div className="col-md-5 productDiv">
                    <a className="shareRequests"><div onClick={this.onSeeShareRequests}><p></p></div></a>
                    <div className="productImage">
                        <img className="img-responsive itemImage" src={women} />
                    </div>
                    <h3>Soch : Traditional kurtas </h3>
                    <h4>Buy @ 699</h4>
                    <div className="radioButtons">
                        <RadioGroup onChange={this.onPurchaseTypeChangeWomen} horizontal>
                            <RadioButton rootColor={"black"} pointColor={"blue"} value="simple">
                                Buy Single
                            </RadioButton>
                            <RadioButton rootColor={"black"} pointColor={"blue"} disabled={true} value="threshold">
                                Buy Multiple
                            </RadioButton>
                        </RadioGroup>
                    </div>
                    <div className="priceDetails">
                        <div className="col-md-6">
                            <span style={{ 'fontSize': '30px' }}>{this.state.purchaseTypeWomen == "simple" ? this.state.womenPrice : (this.state.womenPriceShare / 2)}</span>
                        </div>
                        <div className="col-md-6">
                            {this.getCheckoutButton()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        itemDetails: state.itemsDetails
    }
}
function mapDispatchToProps(dispatch) {
    return {
        updatePurchaseTypeMen: (value) => {
            dispatch({
                type: 'UPDATE_PURCHASE_TYPE_MEN', value
            })
        },
        updatePurchaseTypeWomen: (value) => {
            dispatch({
                type: 'UPDATE_PURCHASE_TYPE_WOMEN', value
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);