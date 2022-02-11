import React, { Component } from 'react';
import axios from 'axios';
class DeleteVendor extends Component {
    constructor()
    {
        super();
        this.state = {Vendor:[]};
    }
    componentDidMount() {     
        axios.get(" http://localhost:4000/Vendor").then(response => {
            this.setState({ Vendor: response.data });
        })
    }
    onDelete = (eid)=>{
        axios.delete(" http://localhost:4000/Vendor" + eid).then(resp=>{
            console.log("Delete ", resp);
        })
    }
    render() {
        let {  Vendor } = this.state;
      return(
          <>
          <h5>Delete vendor </h5>
             <table className="table">
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Contact Number</th>
                    <th>Type</th>
                    <th>Delete</th>
                </tr>
                {Vendor.map((item, idx) => {
                    return (
                        <tr key={idx}>
                                <td>{item.id}</td>
                                <td>{item.vendorName}</td>
                                <td>{item.contactNumber}</td>
                                <td>{item.type}</td>
                                <td><button className="btn btn-outline-danger" onClick={()=>this.onDelete(item.id)}>Delete</button></td>
                            </tr>)
                })}                
            </tbody>
        </table>
          </>
      )
    }
}
export default DeleteVendor;