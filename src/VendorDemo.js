import React, { Component } from "react";
// import './index.css';
// import './ClassExercise.css';

class Client extends Component {
  constructor() {
    super();
    this.state = {
      clients: [
        { id: 101, 
            name: "A1 Pvt. Ltd.",
         address: "Mumbai", 
         status: "active" },
        {
          id: 102,
          name: "A2 Pvt. Ltd.",
          address: "Ahmedabad",
          status: "disabled",
        },
        { id: 103,
             name: "A3 Pvt. Ltd.",
              address: "Pune", 
              status: "active" },
        {
          id: 104,
          name: "A4 Pvt. Ltd.",
          address: "Mehsana",
          status: "disabled",
        },
        {
          id: 105,
          name: "A5 Pvt. Ltd.",
          address: "Bangalore",
          status: "active",
        },
      ],
      clientStatus: undefined,
    };
  }

  handleSelect(status) {
    this.setState({
      clientStatus: status,
    });
  }

  render() {
    return (
      <>
      <div className="text-center">
      <div className="col-md-6">
          <h5>Current Active Client: {this.state.clientStatus} </h5>
          <table className="table table-dark" border="1" cellSpacing="0">
            <tbody>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Select</th>
              </tr>
              {this.state.clients.map((client, idx) => (
                <tr key={idx}>
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.address}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleSelect(client.status)}
                    >
                      Select
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
      </div>
        </>
    );
  }
}

export default Client;
