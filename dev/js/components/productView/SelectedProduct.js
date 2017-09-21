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
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <img className="img-responsive resizeImage" src={men} />
                        </div>
                        <div className="col-md-7">
                            <table>
                                <tr>
                                    <td className="col-md-2"><strong> ItemDescription:</strong></td>
                                    <td className="col-md-4"> {this.props.itemDetails.menProductName}</td>
                                </tr>
<<<<<<< HEAD
                                <br />
                                <tr className="marginItem">
                                    <td><strong>Price:</strong> </td>
                                    <td> Buy 1 @{this.props.itemDetails.menPriceAlone}/ Buy 2 @{this.props.itemDetails.menPriceShare}  </td>
                                </tr >
                                <br />
                                <tr className="marginItem">
                                    <td><strong> Quantity:</strong> </td>
                                    <td> {this.props.itemDetails.menQuantity}  </td>
=======
                                <br/>
                                <tr>
                                    <td className="col-md-2"><strong>Price:</strong> </td>
                                    <td className="col-md-4"> Buy 1 @{this.props.itemDetails.menPriceAlone}/ Buy 2 @{this.props.itemDetails.menPriceShare}  </td>
                                </tr >
                                                          <br/>
                                <tr>
                                    <td className="col-md-2"><strong> Quantity:</strong> </td>
                                    <td className="col-md-4"> {this.props.itemDetails.menQuantity}  </td>
>>>>>>> c08c1be90c0122fca1385a0b01c115ed91641b41
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