import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function LoginNavigate()
{
    const { Logid, pass } = useParams();
    return(
        <>
        <Link to="dashboard">Dashboard</Link><br></br>
        <h5>Selected Login Id : {Logid} : Password  : {pass}</h5>
        
        </>
    )
}

export default LoginNavigate