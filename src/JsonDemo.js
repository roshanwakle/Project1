import React, { Component } from 'react';
import axios from 'axios';
class JsonDemo extends Component {
    constructor() {
        super();
        this.state = { allDesignation: [], Employees: [], selectDId: '' };
    }
    componentDidMount() {
        axios.get("http://localhost:4000/Designation").then(response => {
            this.setState({ allDesignation: response.data });
        })
        axios.get("http://localhost:4000/Employee").then(response => {
            this.setState({ Employees: response.data });
        })
    }
    onChangeDDL = (e) => {
        let { value } = e.target;
        console.log(value);
        this.setState({ selectDId: value });
    }
    render() {
        let { allDesignation, Employees, selectDId } = this.state;
        return (
            <>
                <h1>Fill Designation in DDL</h1>
                <select onChange={this.onChangeDDL}>
                    {allDesignation.map((item, idx) => {
                        return (
                            <option key={idx} value={item.id}>{item.designationName}</option>
                        )
                    })}
                </select>
                <div>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>City</th>
                            </tr>
                            {Employees.map((item, idx) => {
                                return (
                                    parseInt(item.DesignationId) === parseInt(selectDId) &&
                                    (
                                        <tr key={idx}>
                                            <td>{item.id}</td>
                                            <td>{item.employeeName}</td>
                                            <td>{item.address}</td>
                                            <td>{item.city}</td>
                                        </tr>
                                    ))

                            })}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
export default JsonDemo;