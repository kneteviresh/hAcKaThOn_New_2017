import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class Products extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            purchaseType: "single"
        };

    }

    onPurchaseTypeChange(e) {
        this.setState({
            purchaseType: e.target.value
        })
    }

    render() {
        return (
            <div className="container mainDiv">
                <a><p><span>2</span> share requests</p></a>
                <div className="productImage">

                </div>
                <RadioGroup onChange={this.onPurchaseTypeChange} horizontal>
                    <RadioButton value="apple">
                        Buy
                    </RadioButton>
                    <RadioButton value="orange">
                        Share and Buy
                    </RadioButton>
                </RadioGroup>
            </div>
        );
    }
 }

export default Products;