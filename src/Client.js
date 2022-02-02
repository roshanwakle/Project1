import React,{Component} from 'react';
class Client extends Component{
    constructor()
    {
        super();
        this.state=[
        {clientid:111,clientname:"Roshan",status:"active"},
        {clientid:112,clientname:"Dynesh",status:"disable"},
        {clientid:113,clientname:"Girish",status:"active"},
        {clientid:114,clientname:"Viaibhav",status:"disable"},
        {clientid:115,clientname:"Malini",status:"disable"},
    ]
}
    // this.onClickHandler=this.onClickHandler.bind(this)
    
// }
// onClickHandler()
// {
//     let {Counter}=this.state;
//     Counter++;
//     this.setState({Counter});
//     console.log("Click is clled",Counter);
// }
render()
{
   return(
       <>
       <h1>User Details Table</h1>
       <table className='table table-hover table-dark'>
           <tr>
               <th>client id</th>
               <th>client name</th>
               {/* <th>Address</th>  */}
               <th>Select</th>
           </tr>
           {
               this.state.map((user,id)=>{

                  return( <tr key={id}>
                       
                       <td>{user.clientid}</td>
                       <td>{user.clientname}</td>
                       <td><button className='btn btn-info' onClick={()=>{
                           alert(user.status)
                       }}>
                           </button>select</td>
                   </tr>)
               })

           }
        </table>
        </>
   )
}
}
export default Client;
    