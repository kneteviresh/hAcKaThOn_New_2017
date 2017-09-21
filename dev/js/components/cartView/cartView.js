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
                                <td>FabAlley Black Polka Dot Print Maxi Skirt</td>
                                <td> 40</td>
                                <td>1 </td>
                                <td>Wiztech Corp</td>
                                <td> Rs.400 </td> 
                            </tr>
                        
                    </tbody>
                </table>
                </div>
        )
    }

}
function mapStateToProps(state, ownProps) {
    console.log("inside cart");
    console.log(state.itemsDetails);
    return {
        itemDetails: state.itemsDetails
    }
}

export default connect(mapStateToProps, null)(cartView);