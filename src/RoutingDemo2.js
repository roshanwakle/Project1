import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Dashboard from "./Dashboard";
import Client from "./Client";
// import VendorDemo from "./VendorDemo";
// import RoutingClient from "./RoutingClient";
// import Client1 from "./Client1";


function RoutingDemo2() {
  return (
    <>
      <div className="text-center">
        <h5>Routing</h5>
      </div>
      <Router>
        <div className="row">
          <div className="col-md-2">
            <ul>
              <li className="mr-2">
                <Link to="/client">Dashboard</Link>
              </li>
              
              {/* <li className="mr-2">
                <Link to="/vendor">Vendor </Link>
              </li>
              <li className="mr-2">
                <Link to="/client1">Client Data </Link>
              </li> */}
            </ul>
          </div>
          <div className="col-md-10">
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/client" element={<Client />} />
              {/* <Route path="/vendor" element={<VendorDemo />} />
              <Route path="/client1" element={<Client1 />} />
              <Route path="/client/:cid/:cname" element={<RoutingClient />} /> */}
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default RoutingDemo2;
