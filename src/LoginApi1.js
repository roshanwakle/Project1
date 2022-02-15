import React, { useState, useEffect } from 'react';
import axios from 'axios';
function LoginApi1() {
    const [id, setId] = useState();
    const [userid, setuserid] = useState();
    const [password, setPassword] = useState();
    const [loginData, setLoginData] = useState([]);

    useEffect(() => {
        LoadLogin();
    }, [])

    const LoadLogin = ()=>{
        axios.get("http://localhost:4000/Login").then(response => {
            setLoginData(response.data);
            console.log(response.data);
        })
    }

    const onSubmit = ()=>{
        // console.log("Submitted");
        // let tempclientData = clientData;
        // tempclientData.push({id:id,clientname:clientname,address:address});
        // setClientData([...tempclientData]);
        let cData = {id:id,userid:userid,password:password};
        axios.post("http://localhost:4000/Login", cData).then(response=>{
            LoadLogin();
        })
    }

    return (
        <>
            <h5>Client List</h5>
            <div className='row'>
                <div className="col-md-6">
                    <table className="table">
                        <tbody>
                            {loginData.map((item, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{item.id}</td>
                                        <td>{item.userid}</td>
                                        <td>{item.password}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label> Id</label>
                        <input type="text" className="form-control" onChange={(e) => setId(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Login id</label>
                        <input type="text" className="form-control" onChange={(e) => setuserid(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>password</label>
                        <input type="text" className="form-control" onChange={(e) =>setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                       <button onClick={onSubmit} className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )

}
export default LoginApi1;