import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import './homescreen.scss';
import men from '../../../images/men.jpg';
import women from '../../../images/women.jpg';

class Products extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            purchaseTypeMen: "single",
            purchaseTypeWomen: "single",
            menPrice: 1000,
            menPriceShare: 1500,
            womenPrice: 699,
            womenPriceShare: 1000,
        };
        this.onPurchaseTypeChangeMen = this.onPurchaseTypeChangeMen.bind(this);
        this.onPurchaseTypeChangeWomen = this.onPurchaseTypeChangeWomen.bind(this);
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

    render() {
        return (
            <div className="container">
                <div className="col-md-5 productDiv">
                    <a className="shareRequests"><div onClick={this.onSeeShareRequests}><p><span>2</span> share requests</p></div></a>
                    <div className="productImage">
                        <img className="img-responsive" src={men} />
                    </div>
                    <div className="radioButtons">
                        <RadioGroup onChange={this.onPurchaseTypeChangeMen} horizontal>
                            <RadioButton value="single">
                                Buy
                    </RadioButton>
                            <RadioButton value="share">
                                Share and Buy
                    </RadioButton>
                        </RadioGroup>
                    </div>
                    <div className="priceDetails">
                        <h2><span>{this.state.purchaseTypeMen == "single" ? this.state.menPrice : (this.state.menPriceShare / 2)}</span></h2>
                    </div>
                </div>
                <div className="col-md-5 productDiv">
                    <a className="shareRequests"><div onClick={this.onSeeShareRequests}><p><span>1</span> share requests</p></div></a>
                    <div className="productImage">
                        <img className="img-responsive" src={women} />
                    </div>
                    <div className="radioButtons">
                        <RadioGroup onChange={this.onPurchaseTypeChangeWomen} horizontal>
                            <RadioButton value="single">
                                Buy
                    </RadioButton>
                            <RadioButton value="share">
                                Share and Buy
                    </RadioButton>
                        </RadioGroup>
                    </div>
                    <div className="priceDetails">
                        <h2><span>{this.state.purchaseTypeWomen == "single" ? this.state.womenPrice : (this.state.womenPriceShare / 2)}</span></h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;