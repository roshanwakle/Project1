import React,{Component} from "react";
const emailValidator=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PasswordValidator=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
class Form1 extends Component{
constructor(){
    super();
    this.state={
        firstname:"",
        laastName:"",
        Email:"",
        Password:"",
        isFormSubmitted:false
    };
    this.handleChange=this.handleChange.bind(this);
    this.handlBlure=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.validateFirstName=this.validateFirstName.bind(this);
    this.validateLastName=this.validateLastName.bind(this);
    this.validateEmail=this.validateEmail.bind(this);
    this.validatePassword=this.validatePassword.bind(this)
    this.validatePaswordConformation=this.validatePaswordConformation.bind(this);
    this.validateField=this.validateField.bind(this)
};

handleChange(event){
const { name, value}=event.target

this.setState({
    [name]:value
});
return;
}


render(){
return(
    <>
    <div className="main">
        <h2 style={{color:"red"}}>Form</h2>
        {this.state.isFormSubmitted ?(
     <div className="details">
         <h3>Thhanks for signing Up ,find your details below</h3>
         <div>First Name {this.state.firstname}</div>
         <div>Last Name {this.state.laastName}</div>
         <div>Email {this.state.Email}</div>
     </div>
        ):(
            <div style={{textAlighn:"centre"}}>
                <form onSubmit={this.handleSubmit}></form>
            </div>
        )}

    </div>
    </>
);
}
}
export default Form1;
