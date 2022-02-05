import React,{Component} from "react";
class Employee extends Component{
    constructor()
    {
        super();
        this.state={
            Emp: [
                {Empid: 101, Empname: 'Rahul',EmpSal:50000 },
                {Empid: 102, Empname: 'Prakash',EmpSal:100000},
                {Empid: 103, Empname: 'Pranv',EmpSal:200000},
                {Empid: 104, Empname: 'Ayush',EmpSal:500000},
               
            ]
           
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
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>EmpId</th>
                        <th>EmpName</th>
                        <th>EmpSal</th>
                       
                    </tr>
                    {this.state.Emp.map((e, idx) => (
                        <tr key={idx}>
                            <td>{e.Clientid}</td>
                            <td>{e.name}</td>
                            <td>{e.dueAmount}</td>
                            <td>{e.type}</td>
                            
                        </tr>
                    ))}
                </tbody>
                </table>
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