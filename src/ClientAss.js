import React,{ useState} from "react";
function ClientAss()
{const clientdata=[
    {id:1,clientId:111,clienName:"ABC Company"},
    {id:2,clientId:222,clienName:"SSS Company"},
    {id:3,clientId:333,clienName:"FFF Company"},
    {id:4,clientId:444,clienName:"CCC Company"},
    {id:5,clientId:555,clienName:"VVV Company"},
];
const [ ClientData, setClientData ] = useState(clientdata);

return(
    <>
    <div className="col-md-6">
        <h6>Heading</h6>
        <table className="table table-dark">
            <tbody>
                <tr>
                    <td>Id</td>
                    <td>Client Id</td>
                    <td>Client Name</td>
                    <td>Show</td>
                </tr>
                {clientdata.map((item,idx)=>{
                    return(
                        <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.clientId}</td>
                            <td>{item.clienName}</td>
                            <td><button className="btn btn-success" >Show</button></td>
                        </tr>
                            
                    )
                })}
            </tbody>
        </table>
    </div>
    
    </>
);
}
export default ClientAss