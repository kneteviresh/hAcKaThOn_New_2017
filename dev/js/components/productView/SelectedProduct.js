import React, { Component } from 'react';
import './SelectedProduct.scss';
import men from '../../../images/men.jpg';
import women from '../../../images/women.jpg';

class SelectedProduct extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    handleAddToCart(){
        this.props.handleViewChange('cart')
    }
    render() {
        return (
            <div className="boldFont">
                <div className="container" style={{ marginTop: "200px" }}>
                    <div className="row">
                        <div className="col-md-2">
                            <img className="img-responsive resizeImage" src={men} />
                        </div>
                        <div className="col-md-6">
                            <table>
                                <tr>
                                    <td className="marginItem"> ItemDescription:</td>
                                    <td> Proline: Men T-shirt</td>
                                </tr>
                                <tr className="marginItem">
                                    <td> Price: </td>
                                    <td>  </td>
                                </tr >
                                <tr className="marginItem">
                                    <td> Quantity: </td>
                                    <td>   </td>
                                </tr>
                            </table>
                        </div>
                        <div className="col-md-4">

                        </div>
                    </div>
                    <div style={{ marginTop: "50px" }}><button type="button" className="btn btn-primary">Share n Save</button>

                        <button onClick={this.handleAddToCart} className="btn btn-primary" style={{ marginLeft: "50px" }}>Add to cart</button>


                    </div>
                </div>
            </div>
        );
    }
}

export default SelectedProduct;