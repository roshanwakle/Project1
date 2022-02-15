import React from "react";
import { useParams } from "react-router-dom";
function RoutingClient()
{
    const {cid , cname } = useParams();
    console.log(cid, cname);
    return(
        <>
        <h3>Phone No:{cid} Area Code:{cname}</h3>
        </>
    )
}
export default RoutingClient;