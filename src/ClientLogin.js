import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
class ClientLogin extends Component {
  constructor() {
    super();
    this.state = { Client: [] };
  }
  componentDidMount() {
    axios.get("  http://localhost:4000/Login").then((response) => {
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
                  <th>User Id</th>
                  <th>Password</th>
                  <th>Open</th>
                </tr>
                {Client.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{item.id}</td>
                      <td>{item.userid}</td>
                      <td>{item.password}</td>
                      <td><Link className="btn btn-primary" to={`/LoginNavigate/${item.userid}/${item.password}`} >{item.password}</Link></td>
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
export default ClientLogin;
