import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginNavigate from "./LoginNavigate";
import ClientLogin from "./ClientLogin";
import Dashboard from "./Dashboard";
function LoginRouting() {
  return (
    <>
      <div className="text-center">
        <h5>Routing</h5>
      </div>
      <Router>
        <div className="row">
          <div className="col-md-2">
              <ul>
               {/* <li><Link to="/dashboard">DashBoard</Link></li> */}
                <li><Link to="/LoginForm">Login</Link></li>
             </ul>
          </div>
          <div className="col-md-10">
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                 <Route path="LoginForm" element={<LoginForm/>}/>
                 <Route path="LoginNavigate" element={<LoginNavigate/>}/>
                 <Route path="/LoginNavigate/:Logid/:pass" element={<LoginNavigate/>}/>
                 <Route path="ClientLogin" element={<ClientLogin/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default LoginRouting;
