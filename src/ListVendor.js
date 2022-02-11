import React, { Component } from 'react';
import axios from 'axios';
class ListVendor extends Component {
    constructor()
    {
        super();
        this.state = {Vendor:[]};
    }
    componentDidMount() {     
        axios.get("http://localhost:4000/Vendor").then(response => {
            this.setState({ Vendor: response.data });
        })
    }
    render() {
        let {  Vendor } = this.state;
      return(
          <>
             <table className="table table-hover table-dark">
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Type</th>
                </tr>
                {Vendor.map((item, idx) => {
                    return (
                        <tr key={idx}>
                                <td>{item.id}</td>
                                <td>{item.vendorName}</td>
                                <td>{item.contactNumber}</td>
                                <td>{item.type}</td>
                            </tr>)
                })}                
            </tbody>
        </table>
          </>
      )
    }
}
export default ListVendor