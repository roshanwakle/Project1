import React, {Component } from 'react';
import axios from 'axios';
class Employee3 extends Component
{
    constructor()
    {
        super();
        this.state = {Employee3:[]};
    }
    componentDidMount()
    {
        axios.get(" http://localhost:4000/Employee").then(response=>{
            this.setState({Employee3:response.data});
        })
    }
    render()
    {
        let { Employee3 } = this.state;
        console.log(Employee3);
        return(
            <>
            <h1>Employee3 </h1>
            <table className="table">
            <tbody>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
            </tr>
                {Employee3.map((item,idx)=>{
                    return(
                        <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.employeeName}</td>
                            <td>{item.address}</td>
                            <td>{item.city}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
            </>
        )
    }
}
export default Employee3;