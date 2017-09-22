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
            Quantity: "1",
            isRequestVisible: false
        }
        super(props, context);

        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.handleBuyOwn = this.handleBuyOwn.bind(this);
        this.handleAccept = this.handleAccept.bind(this);
        this.handleInviteButton = this.handleInviteButton.bind(this);
        this.handleInviteSubmit = this.handleInviteSubmit.bind(this);
        this.requestGoToCart = this.requestGoToCart.bind(this);
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
        var details = {
            quantity: quantity,
            type: "own"
        }
        this.props.updateQuantity(details);
        this.props.handleViewChange('cartView');
    }

    handleAccept() {
        var details = {
            quantity: 1,
            type: "share"
        }
        this.props.updateQuantity(details);
        this.props.handleViewChange('cartView');
    }

    handleInviteButton() {
        this.setState({
            isRequestVisible: !this.state.isRequestVisible
        });
    }

    handleInviteSubmit() {
        var details = {
            message: this.refs.message.value,
            user: this.getCookie("userName")
        }
        this.props.updateInviteDetails(details);
    }

    getCookie(name) {
        var regexp = new RegExp("(?:^" + name + "|;\s*" + name + ")=(.*?)(?:;|$)", "g");
        var result = regexp.exec(document.cookie);
        return (result === null) ? null : result[1];
    }

    requestGoToCart() {
        this.props.handleViewChange('cartView');
    }



    getShareOfferOptions() {
        var user = this.getCookie("userName");
        var component;
        var userDetails = this.props.itemDetails[user];
        if (userDetails.requested) {
            component =
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
                            </tbody>
                        </table>
                    </div>
                </div>
        }
        else {
            var user = this.getCookie('username');
            if (user == "viresh")
                var newUser = "kavith";
            else
                var newUser = "viresh";
            var userDetails = this.props.itemDetails[newUser];
            component =
                <div className="col-md-5 sharePurchase">
                    <p style={{ 'color': 'green', 'marginTop': '5px' }}> Requesr share offer with below invite button</p>
                    <div>
                        {!userDetails.requested && <div className="inviteBuyers">
                            <button onClick={this.handleInviteButton} className="btn btn-primary buyNowButton">Invite</button>
                            {this.state.isRequestVisible && <div>
                                <h5>Enter Message</h5>
                                <textarea required rows={2} ref="message" ></textarea><br />
                                <button onClick={this.handleInviteSubmit} className="btn btn-primary buyNowButton">Submit</button>
                            </div>}
                        </div>}
                        {userDetails.requested && <button onClick={this.requestGoToCart} className="btn btn-primary buyNowButton">Go to cart</button>}
                    </div>
                </div>
        }
        return component;
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


                        {this.getShareOfferOptions()}
                        {/* <table className="table table-bordered">
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
                                    </tbody>
                                </table> */}

                    </div>
                    {/* <div className="row">
                        <div style={{ marginTop: "50px", marginLeft: "220px" }}>
                            <button type="button" className="btn btn-primary buyNowButton">Share n Save</button>
                            <button onClick={this.handleAddToCart} className="btn btn-primary buyNowButton" style={{ marginLeft: "50px" }}>Add to cart</button>
                        </div>
                    </div> */}
                </div >
            </div >
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
        updateQuantity: (details) => {
            dispatch({
                type: 'UPDATE_QUANTITY_MEN', details
            })
        },
        updateInviteDetails: (details) => {
            dispatch({
                type: 'UPDATE_INVITES_DETAILS_MEN', details
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SelectedProduct);