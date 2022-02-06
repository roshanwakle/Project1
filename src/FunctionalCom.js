import React,{useState} from 'react';

function FunctionalCom(){
    const [ employeeId ,setEmployeeId]=useState("");
    const [ employeeName ,setEmployeeName]=useState("");

    const onSubmit=()=>{
        console.log(employeeId,employeeName)
    }


  return(
       <>
           <h1>Employee</h1>
           <div className='form-group'>
               <label>setEmployeeId</label>
               <input type="text" className='form-control ' onChange={(e)=>setEmployeeId(e.target.value)}></input>
           </div>
           <div className='form-group'>
               <label>setEmployeeId</label>
               <input type="text" className='form-control mr-3 ' onChange={(e)=>setEmployeeName(e.target.value)}></input>
           </div>
           <div className='form-group'>
               <button className='btn btn-success mr-3' onClick={onSubmit}>Submit</button>
           </div>
       </>
  );
}
export default FunctionalCom;