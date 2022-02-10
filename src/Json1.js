import React, {Component } from 'react';
import axios from 'axios';
class Json1 extends Component
{
    constructor()
    {
        super();
        this.state = {Json1:[]};
    }
    componentDidMount()
    {
        axios.get("http://localhost:4000/users").then(response=>{
            this.setState({Json1:response.data});
        })
    }
    render()
    {
        let { Json1 } = this.state;
        console.log(Json1);
        return(
            <>
            <h1>Employees </h1>
            <table className="table">
            <tbody>
            <tr>
                <th>Id</th>
                <th>user name</th>
                <th>password</th>
                <th>status</th>
            </tr>
                {Json1.map((item,idx)=>{
                    return(
                        <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                            <td>{item.status}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
            </>
        )
    }
}
export default Json1;