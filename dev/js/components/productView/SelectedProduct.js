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
            Quantity: "1"
        }
        super(props, context);

        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.handleBuyOwn = this.handleBuyOwn.bind(this);
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

    getButtonText() {
        var quantity = Number(this.state.Quantity)
        if (quantity > 0 && quantity < 3) {
            return <span>Buy {quantity} at <span>{quantity == 1 ? 1000 : 1500}</span> </span>
        }
        else
            return <span> Buy 1 @ 1000 </span>
    }

    handleBuyOwn() {
        var quantity = Number(this.state.Quantity)
        this.props.updateQuantity(quantity);
        this.props.handleViewChange('cartView');
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
                                <br />
                                <tr>
                                    <td className="col-md-2"><strong>Price:</strong> </td>
                                    <td className="col-md-4"> Buy 1 @{this.props.itemDetails.menPriceAlone}/ Buy 2 @{this.props.itemDetails.menPriceShare}  </td>
                                </tr >
                                <br />
                                <tr>
                                    <td className="col-md-2"><strong> Quantity:</strong> </td>
                                    <td className="col-md-4"> {this.props.itemDetails.menQuantity}  </td>
                                </tr>
                                <br />
                            </table>
                        </div>
                        <div className="col-md-4">
                        </div>
                    </div>
                    <div style={{ 'marginTop': '10px' }} className="row">
                        <div className="col-md-5 ownPurchase">
                            <p style={{ 'color': 'green', 'marginTop': '5px' }}> this product is available for buy 2 offer</p>
                            <h3>Enter Quantity : <input defaultValue={1} min={1} max={2} className="form-control" type="number" onChange={this.handleQuantity} /></h3>
                            <button onClick={this.handleBuyOwn} style={{ 'fontSize': '20px' }} className="btn btn-primary buyNowButton">
                                {this.getButtonText()}
                            </button>
                        </div>
                        <div className="col-md-5 sharePurchase">
                            <p style={{ 'color': 'green', 'marginTop': '5px' }}> 2 others interested in sharing this offer</p>
                            <div>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Ratings</th>
                                            <th>Accept</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Kavitha</td>
                                            <td>*****</td>
                                            <td><button onClick={this.handleAccept} className="btn btn-primary buyNowButton">Accept</button></td>
                                        </tr>
                                        <tr>
                                            <td>Shilpi</td>
                                            <td>***</td>
                                            <td><button onClick={this.handleAccept} className="btn btn-primary buyNowButton">Accept</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div style={{ marginTop: "50px", marginLeft: "220px" }}>
                            <button type="button" className="btn btn-primary buyNowButton">Share n Save</button>
                            <button onClick={this.handleAddToCart} className="btn btn-primary buyNowButton" style={{ marginLeft: "50px" }}>Add to cart</button>
                        </div>
                    </div> */}
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
        updateQuantity: (value) => {
            dispatch({
                type: 'UPDATE_QUANTITY_MEN', value
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SelectedProduct);