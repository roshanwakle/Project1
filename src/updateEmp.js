import React, { Component } from "react";
import axios from "axios";

class Employee extends Component{
    constructor()
    {
        super();
        this.state={Employee:[],allDesigntion:[],selectDesiId:""}
        
            
    }
    componentDidMount(){
        axios.get("http://localhost:4000/Designation").then(response=>{
            this.setState({allDesigntion:response.data})
        })
        axios.get("http://localhost:4000/Designation").then(response=>{
            this.setState({allDesigntion:response.data})
        })
    }
    onChangeHandle=(e)=>{
        let {value}=e.target;
        console.log(value);
        this.setState({selectDesId:value})
    }
    render(){
        return(
            <>
            <h3 className="mx-5">Employee Details</h3>
            <select className="mx-5 btn btn-primary" onChange={this.onChangeHandle}>
                  {allDesigntion.map((item,idx)=>{
                      return(
                          <option key={idx} value={item.id}>{item.DesgName}</option>
                      )
                  })}
            </select>
            <div className="table">
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>employeeName</th>
                        <th>address</th>
                        <th>city</th>
                    </tr>
                    {Employee.map((item,idx)=>{
                        return(
                            parseInt(item.DesgNameid)===parseInt(selectDesId) && 
                            <tr key={idx}>
                                <td>{item.id}</td>
                                <td>{item.employeeName}</td>
                                <td>{item.address}</td>
                                <td>{item.city}</td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </div>
            </>
        )
    }
}
export default Employee;