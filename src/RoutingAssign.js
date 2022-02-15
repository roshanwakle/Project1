import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ClientAss from "./ClientAss";
import ClientAss_api from "./ClientAss_api";
import ClientParm from "./ClientParm";
function RoutingAssign() {
  return (
    <>
      <div className="text-center">
        <h5>Routing</h5>
      </div>
      <Router>
        <div className="row">
          <div className="col-md-2">
              <ul>
                <li><Link to="/ClientAss">ClientAss</Link></li>
                <li><Link to="/ClientAss1">ClientApi</Link></li>
             </ul>
          </div>
          <div className="col-md-10">
            <Routes>
                 <Route path="ClientAss" element={<ClientAss/>}/>
                 <Route path="ClientAss1" element={<ClientAss_api/>}/>
                 <Route path="ClientAss1" element={<ClientParm/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default RoutingAssign;
