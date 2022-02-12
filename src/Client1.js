import React, { Component } from "react";
import axios from "axios";
class Client1 extends Component {
  constructor() {
    super();
    this.state = { Client: [] };
  }
  componentDidMount() {
    axios.get(" http://localhost:4000/Client").then((response) => {
      this.setState({ Client: response.data });
    });
  }
  render() {
    let { Client } = this.state;
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
            {Client.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{item.id}</td>
                  <td>{item.Name}</td>
                  <td>{item.phoneNo}</td>
                  <td>{item.area}</td>
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
export default Client1;
