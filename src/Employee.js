import React,{Component} from "react";
class Employee extends Component{
    constructor()
    {
        super();
        this.state={
            Empid:1111,
            EmpName:"Ravi",
            Salary:"50000"

        }
    }
    Update()
    {
        this.setState({Empid:this.state.Empid+1})
    }
    render()
    {
        return(
            <>
            <div>
                <p>Empid={this.state.Empid}</p>
                <p>EmpName={this.state.EmpName}</p>
                <p>Salary={this.state.Salary}</p>
                <button className="btn btn-primary" onClick={()=>this.Update()}>Update Data</button>
            </div>
            </>
        );
    }
}
export default Employee;

// 1. Create a component named Employee
// 2. Create a Emp Object in state having field name EmpId, EmpName,Salary
// 3. Display in render method
// 4. Display every field in separate paragraph