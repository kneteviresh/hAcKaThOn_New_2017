import React, { Component } from 'react';
import './SelectedProduct.scss';
import men from '../../../images/men.jpg';
import women from '../../../images/women.jpg';
import { connect } from 'react-redux';

class SelectedProduct extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            shareDivVisible: false,
            Quantity: 1
        }
        super(props, context);

        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
    }

    handleAddToCart() {
        this.props.handleViewChange('cartView')
        this.shareDetails = this.shareDetails.bind(this);
    }

    shareDetails() {
        this.setState({
            shareDivVisible: !this.state.shareDivVisible
        });
    }
    getShareDiv() {
        var sharedDiv;
        if (this.state.shareDivVisible) {
            sharedDiv =
                <div>
                    <h1>user1 </h1>
                </div>
        }
        else {
            sharedDiv = '';
        }
        return sharedDiv;
    }
    handleQuantity(e) {
        this.setState({
            Quantity: e.target.value
        });
    }

    render() {
        return (
            <div className="boldFont">
                <div className="container" style={{ marginTop: "50px" }}>
                    <div className="row" style={{ marginLeft: "200px" }}>
                        <div className="col-md-2">
                            <img className="img-responsive resizeImage" src={men} />
                        </div>
                        <div className="col-md-6">
                            <table>
                                <tr>
                                    <td className="marginItem"><strong> ItemDescription:</strong></td>
                                    <td> {this.props.itemDetails.menProductName}</td>
                                </tr>
                                <br />
                                <tr className="marginItem">
                                    <td><strong>Price:</strong> </td>
                                    <td> Buy 1 @{this.props.itemDetails.menPriceAlone}/ Buy 2 @{this.props.itemDetails.menPriceShare}  </td>
                                </tr >
                                <br />
                                <tr className="marginItem">
                                    <td><strong> Quantity:</strong> </td>
                                    <td> {this.props.itemDetails.menQuantity}  </td>
                                </tr>
                                <br />
                            </table>
                        </div>
                        <div className="col-md-4">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 ownPurchase">
                            <p style={{ 'color': 'green' }}>** this product is available for buy 2 offer</p>
                            <input type="number" onChange={this.handleQuantity} />
                            <button className="btn-btn-primary">
                                buy <span>{this.state.Quantity}</span> at <span>
                                    {this.state.Quantity == 1 ? 1000 : 750}
                                </span>
                            </button>
                        </div>
                        <div className="col-md-6 sharePurchase">
                        </div>
                    </div>
                    <div className="row">
                        <div style={{ marginTop: "50px", marginLeft: "220px" }}>
                            <button type="button" className="btn btn-primary">Share n Save</button>
                            <button onClick={this.handleAddToCart} className="btn btn-primary" style={{ marginLeft: "50px" }}>Add to cart</button>
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

export default connect(mapStateToProps, null)(SelectedProduct);