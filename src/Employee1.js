import React, { Component } from "react";
import axios from "axios";
class Employee1 extends Component {
  constructor() {
    super();
    this.state = { allDepartment: [], Employees: [], selectDepId: "" };
  }
  componentDidMount() {
    axios.get("http://localhost:4000/Department").then((response) => {
      this.setState({ allDepartment: response.data });
    });
    axios.get("http://localhost:4000/Employee").then((response) => {
      this.setState({ Employees: response.data });
    });
  }
  onChangeDDL = (e) => {
    let { value } = e.target;
    console.log(value);
    this.setState({ selectDepId: value });
  };
  render() {
    let { allDepartment, Employees, selectDepId } = this.state;
    return (
      <>
        <div>
          <h1>Fill Department</h1>
          <select onChange={this.onChangeDDL}>
            {allDepartment.map((item, idx) => {
              return (
                <option key={idx} value={item.id}>
                  {item.departmentName}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <table className="table table-hover table-dark">
            <tbody>
              <tr>
                <th>Id</th>
                <th>Emp Name</th>
                <th>Salary</th>
              </tr>
              {Employees.map((item, idx) => {
                return (
                  parseInt(item.DepartmentId) === parseInt(selectDepId) && (
                    <tr key={idx}>
                      <td>{item.id}</td>
                      <td>{item.Empname}</td>
                      <td>{item.salary}</td>
                    </tr>
                  )
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default Employee1;
