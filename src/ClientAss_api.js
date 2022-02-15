import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class ClientAss_api extends Component {
  constructor() {
    super();
    this.state = { ClientAss: [] };
  }
  componentDidMount() {
    axios.get(" http://localhost:4000/ClientAss").then((response) => {
      this.setState({ ClientAss: response.data });
    });
  }
  render() {
    let { ClientAss } = this.state;
    return (
      <>
        <div className="text-center">
        <div className="col-md-6">
        <h5>Client Data</h5>
        <table className="table table-dark ">
          <tbody>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Area</th>
            </tr>
            {ClientAss.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{item.id}</td>
                  <td>{item.ClientName}</td>
                  <td>{item.phoneNo}</td>
                  <td>{item.areaCode}</td>
                  <Link className="btn btn-primary" to={`/ClientAss/${item.phoneNo}/${item.areaCode}`} >{item.areaCode} </Link>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
        </div>
      </>
    );
  }
}
export default ClientAss_api;
