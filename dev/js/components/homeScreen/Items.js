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
            purchaseTypeMen: "single",
            purchaseTypeWomen: "single",
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
        this.handleProceedButton = this.handleProceedButton.bind(this);
    }

    onPurchaseTypeChangeMen(value) {
        this.setState({
            purchaseTypeMen: value
        });
    }

    onPurchaseTypeChangeWomen(value) {
        this.setState({
            purchaseTypeWomen: value
        });
    }

    handleProceedButton() {
        this.props.handleViewChange("productsView")
    }

    // getBuyingOptionMen() {
    //     var button_text;
    //     var buyingOptions;
    //     if (this.state.shareMen) {
    //         button_text = this.state.shareMen + ' share requests';
    //     }
    //     else {
    //         button_text = "request buyers"
    //     }
    //     if (this.state.purchaseTypeMen == "single") {
    //         buyingOptions =
    //             <button className="btn btn-primary buyNowButton" onClick={this.buyNow}><span><strong>Buy Now</strong></span></button>
    //     }
    //     else {
    //         buyingOptions =
    //             <button className="btn btn-primary buyNowButton" onClick={this.ShareAndBuy}><span><strong>{button_text}</strong></span></button>
    //     }
    //     return buyingOptions;
    // }

    // getBuyingOptionWomen() {
    //     var button_text;
    //     var buyingOptions;
    //     if (this.state.shareWomen) {
    //         button_text = this.state.shareWomen + ' share requests';
    //     }
    //     else {
    //         button_text = "request buyers"
    //     }
    //     if (this.state.purchaseTypeWomen == "single") {
    //         buyingOptions = <button className="btn btn-primary buyNowButton" onClick={this.buyNow}><span><strong>Buy Now</strong></span></button>
    //     }
    //     else {
    //         buyingOptions = <button className="btn btn-primary buyNowButton" onClick={this.ShareAndBuy}><span><strong>{button_text}</strong></span></button>
    //     }
    //     return buyingOptions;
    // }

    getCheckoutButton() {
        return <button className="btn btn-primary buyNowButton" onClick={this.handleProceedButton}><span><strong>Proceed</strong></span></button>
    }

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <div className="col-md-5 productDiv">
                    <a className="shareRequests"><div onClick={this.onSeeShareRequests}><p></p></div></a>
                    <div className="productImage">
                        <img className="img-responsive itemImage" src={men} />
                    </div>
                    <h3>Proline: Men T-shirt <span style={{ 'color': 'blue', 'float': 'right' }} className="glyphicon glyphicon-share"></span></h3>
                    <h4> buy @ 1000 / buy 2 @ Rs : 1500</h4>
                    <div className="radioButtons">
                        <RadioGroup onChange={this.onPurchaseTypeChangeMen} horizontal>
                            <RadioButton rootColor={"black"} pointColor={"blue"} value="single">
                                Buy
                    </RadioButton>
                            <RadioButton rootColor={"black"} pointColor={"blue"} value="share">
                                Share and Buy
                    </RadioButton>
                        </RadioGroup>
                    </div>
                    <div className="priceDetails">
                        <div className="col-md-6">
                            <span style={{ 'fontSize': '30px' }}>{this.state.purchaseTypeMen == "single" ? this.state.menPrice : (this.state.menPriceShare / 2)}</span>
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
                            <RadioButton rootColor={"black"} pointColor={"blue"} value="single">
                                Buy
                    </RadioButton>
                            <RadioButton rootColor={"black"} pointColor={"blue"} disabled={true} value="share">
                                Share and Buy
                    </RadioButton>
                        </RadioGroup>
                    </div>
                    <div className="priceDetails">
                        <div className="col-md-6">
                            <span style={{ 'fontSize': '30px' }}>{this.state.purchaseTypeWomen == "single" ? this.state.womenPrice : (this.state.womenPriceShare / 2)}</span>
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
export default connect(mapStateToProps, null)(Products);