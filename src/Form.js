import React,{Component} from "react";
class Form extends Component{
    constructor(){
        super();
        this.state={
            email:" ",
            password:"",
            emailError:"",
            passError:""
        }
    }
    valid()
    {
        if(!this.state.email.includes("@") && this.state.password.length<6)
        {
           this.setState({emailError:"Invalid Email",passError:"Password length should be more than 6"})
        }
        else if(!this.state.email.includes("@") )
        {
           this.setState({emailError:"Invalid Email"})
        }

        else if(! this.state.password.length<6)
        {
           this.setState({passError:"Password length should be more than 6"})
        }
        else{
            return true
        }


    }
    
    Submit()
    {
        this.setState({emailError:"",passError:""})
        if(this.valid())
        {
           alert("Form Submited")
        }
       
        

    }
    render(){
        return(
            <>
            <div>
            <h4>Email:</h4>
            <input type="text" onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Enter your Email"></input>
            <p style={{color:"red" ,fontsize:"2px"}}>{this.state.emailError}</p>
            <h4>Password:</h4>
            <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}} placeholder="Enter your password"></input>
            <p style={{color:"red" ,fontsize:"2px"}}>{this.state.passError}</p>
            <button onClick={()=>this.Submit()} className="btn btn-info " >Submit</button>
    
            </div>
            </>
        );
    }
}
export default Form;