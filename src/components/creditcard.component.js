import React, { Component } from "react";
import './creditcard.css';

export default class CreditCard extends Component {
        
    render() {
        return (
            <form onSubmit={this.addCard}>
                <div className="headerApp">
                <h3>Credit Card System</h3>
                <h5>Add</h5>
                <div className="form-group label" >
                    <label>Name</label>
                    <input type="text"  className="form-control" />
                </div>
                <div className="form-group label">
                    <label>Card Number</label>
                    <input type="text"  className="form-control" />
                </div>
                <div className="form-group label">
                    <label>Limit</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group label">
                <button type="submit" value = "Submit" className="btn btn-primary btn-block label">Add</button>
                </div>
                <h5>Existing Cards</h5>
                </div>
                <div className="tableApp">
                
                <table aria-label="table">
                <thead>
                 <tr>
                    <th>Name</th>
                    <th>Card Number </th>
                    <th>Balance</th>
                    <th>Limit</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Anvitha</td>
                        <td>1234567</td>
                        <td>£10000</td>
                        <td>£100000</td>
                   </tr>
                   <tr>
                        <td>Krishna</td>
                        <td>79927398713</td>
                        <td>£3333</td>
                        <td>£10000</td>
                   </tr>
                    </tbody>
                </table>
                </div>
            </form>
        );
    }
}