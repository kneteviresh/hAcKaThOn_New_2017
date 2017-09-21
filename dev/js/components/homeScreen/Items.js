import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import './homescreen.scss';
import men from '../../../images/men.jpg';
import women from '../../../images/women.jpg';

class Products extends Component {
    constructor(props, context) {
        super(props, context);
        this.setState({
            purchaseType: "single",
            price: 1000,
            priceShare: 1500,

        });

    }

    onPurchaseTypeChange(e) {
        sst({
            purchaseType: e.target.value
        })
    }

    render() {
        console.log(this.state.purchaseType);
        return (
            <div className="container">
                <div className="col-md-5 productDiv">
                    <a className="shareRequests"><div onClick={this.onSeeShareRequests}><p><span>2</span> share requests</p></div></a>
                    <div className="productImage">
                        <img className="img-responsive" src={men} />
                    </div>
                    <div className="radioButtons">
                        <RadioGroup onChange={this.onPurchaseTypeChange} horizontal>
                            <RadioButton value="single">
                                Buy
                    </RadioButton>
                            <RadioButton value="share">
                                Share and Buy
                    </RadioButton>
                        </RadioGroup>
                    </div>
                </div>
                <div className="col-md-5 productDiv">
                    <a className="shareRequests"><div onClick={this.onSeeShareRequests}><p><span>1</span> share requests</p></div></a>
                    <div className="productImage">
                        <img className="img-responsive" src={women} />
                    </div>
                    <div className="radioButtons">
                        <RadioGroup onChange={this.onPurchaseTypeChange} horizontal>
                            <RadioButton value="apple">
                                Buy
                    </RadioButton>
                            <RadioButton value="orange">
                                Share and Buy
                    </RadioButton>
                        </RadioGroup>
                    </div>
                    <div className="priceDetails">
                        <span>{this.state.purchaseType == "single" ? this.state.price : (this.state.priceShare / 2)}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;