import React, { Component } from 'react';
import './SelectedProduct.scss';
import men from '../../../images/men.jpg';
import women from '../../../images/women.jpg';
import { connect } from 'react-redux';

class SelectedProduct extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            shareDivVisible: false
        }
        super(props, context);

        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    handleAddToCart() {
        this.props.handleViewChange('cartView')
        this.renderButtons = this.renderButtons.bind(this);
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
    renderButtons() {

    }
    render() {
        return (
            <div className="boldFont">
                <div className="container" style={{ marginTop: "50px"}}>
                    <div className="row" style={{ marginLeft: "200px"}}>
                        <div className="col-md-2">
                            <img className="img-responsive resizeImage" src={men} />
                        </div>
                        <div className="col-md-6">
                            <table>
                                <tr>
                                    <td className="marginItem"><strong> ItemDescription:</strong></td>
                                    <td> {this.props.itemDetails.menProductName}</td>
                                </tr>
                                <br/>
                                <tr className="marginItem">
                                    <td><strong>Price:</strong> </td>
                                    <td> Buy 1 @{this.props.itemDetails.menPriceAlone}/ Buy 2 @{this.props.itemDetails.menPriceShare}  </td>
                                </tr >
                                                          <br/>
                                <tr className="marginItem">
                                    <td><strong> Quantity:</strong> </td>
                                    <td> {this.props.itemDetails.menQuantity}  </td>
                                </tr>
                                                          <br/>
                            </table>
                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                    <div style={{ marginTop: "50px", marginLeft: "220px"}}><button type="button" className="btn btn-primary">Share n Save</button>

                        <button onClick={this.handleAddToCart} className="btn btn-primary" style={{ marginLeft: "50px" }}>Add to cart</button>


                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state,ownProps) {
    return {
        itemDetails: state.itemsDetails
    }
}

export default connect(mapStateToProps, null)(SelectedProduct);