import React from "react";
import {BrowserRouter as Router,Routes ,Route,Link} from  'react-router-dom'
function RoutingDemo(){
    return(
        <>
        <h4>Routing</h4>
        <Router>
            <ul>
                <li className="mr-2"><link to="/home" >Home</link></li>
                <li className="mr-2"><link to="/service" >Service</link></li>
                <li className="mr-2"><link to="/about" >About</link></li>
                <li className="mr-2"><link to="/contactus" >ContactUs</link></li>
            </ul>
           <Routes>
                {/* <Route path="/test " element={<Test/>}/> */}
                <Route path="/home " element={<Home/>}/>
                <Route path="/service " element={<Service/>}/>
                <Route path="/about " element={<About/>}/>
                <Route path="/contactus " element={<ContactUs/>}/>
                
           </Routes>
        </Router>
        </>
    )
}
export default RoutingDemo
// const Test=()=>{return <h1>This is Test Comonent</h1>}
const Home=()=>{return <h1>This is Home Component</h1>}
const Service=()=>{return <h1>This is Service Component</h1>}
const About=()=>{return <h1>This is About Component</h1>}
const ContactUs=()=>{return <h1>This is ContactUs Component</h1>}
