import React,{Component} from 'react';
import men from '../../../images/men.jpg';
import './cartView.scss';
import { connect } from 'react-redux';

class cartView extends Component{
    render(){
        return(
            <div className="container">
                <h1>My Shopping Bag (1 Item)</h1>
                <table className="table" >
                    <thead>
                        <tr>
                            <th>  </th>
                            <th>Product Description  </th>
                            <th>Size </th>
                            <th>Qty  </th>
                            <th>Sold By  </th>
                            <th> Total Amount </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img className="img-responsive itemImageMen" src={men} />
                                </td>
                                <td>{this.props.itemDetails.menProductName}</td>
                                <td> 40</td>
                                <td>{this.props.itemDetails.menQuantity} </td>
                                <td>Wiztech Corp</td>
                                <td>{this.props.itemDetails.menQuantity ==1?1000:1500}  </td> 
                            </tr>
                        
                    </tbody>
                </table>
                </div>
        )
    }

}
function mapStateToProps(state, ownProps) {
     return {
        itemDetails: state.itemsDetails
    }
}

export default connect(mapStateToProps, null)(cartView);