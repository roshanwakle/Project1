import React, { Component } from "react";
import axios from "axios";
class UpdateEmployee extends Component {
  constructor() {
    super();
    this.state = {
      Employee: { id: "", employeeName: "", address: "", city: "" },
      showMessage: "",
    };
  }
  onChangeHandler = (e) => {
    let { name, value } = e.target;
    let { Employee } = this.state;
    this.setState({ Employee: { ...Employee, [name]: value } });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { Employee } = this.state;
    const URL = "  http://localhost:4000/Employee/" + Employee.id;
    axios.put(URL, this.state.Employee).then((response) => {
      console.log(response);
      if (response.statusText === "OK") {
        this.setState({ showMessage: "Record has been updated" });
      }
    });
  };
  render() {
    const { Employee, showMessage } = this.state;
    return (
      <>
        <div className="container">
          <span className="alert-success">{showMessage}</span>
          <form onSubmit={this.onSubmit}>
            <h5>Update Employee</h5>
            <div>
              <select onChange={this.onChangeHandler}>
                <option value="1">Rahul Sharma</option>
                <option value="2">ABC</option>
                <option value="3">Ragani Singh</option>
                <option value="4">Test</option>
              </select>
            </div>
            <div className="form-group">
              <label>Employee Id</label>
              <input
                type="text"
                className="form-control"
                name="id"
                value={Employee.id}
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label>Employee Name</label>
              <input
                type="text"
                className="form-control"
                name="employeeName"
                value={Employee.employeeName}
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={Employee.address}
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={Employee.city}
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-group"><br></br>
              <button type="submit" className="btn btn-outline-dark">
                Submit  
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default UpdateEmployee;
