import React  from 'react'
import { Link } from 'react-router-dom';
function Dashboard(){
    return(
        <>
        <h1 className='bg-success'>Login Success...</h1>
        <Link to="/" className='btn btn-success'>Logout</Link><br></br>
        <Link to ="/ClientLogin">Client Details</Link><br></br>
        </>
    )
}
export default Dashboard;