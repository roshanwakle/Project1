import React,{Component}from "react";

class Display5a extends Component{
constructor()
{
    super();
    this.state = {
        clientData: [
            {Clientid: 101, name: 'A1 Pvt. Ltd.',dueAmount:50000, type: 'local'},
            {Clientid: 102, name: 'A2 Pvt. Ltd.',dueAmount:50000,  type: 'central'},
            {Clientid: 103, name: 'A3 Pvt. Ltd.',dueAmount:50000,  type: 'central'},
            {Clientid: 104, name: 'A4 Pvt. Ltd.',dueAmount:50000,  type: 'local'},
            {Clientid: 105, name: 'A5 Pvt. Ltd.',dueAmount:50000,  type: 'central'},
        ],
        tempclientData:[]
    }
}

   componentDidMount(){
      
       let{clientData,tempclientData}=this.state;
       tempclientData=clientData;
       this.setState({tempclientData})
   }

   onDataFilter=(clientType)=>{
       let { clientData,tempclientData }=this.state;
       clientData=tempclientData.filter(item=>{
           return (clientType==="all" ? item.type:item.type===clientType)
       })
       this.setState({clientData})
   }
render() {
    let { clientData }=this.state;
    return (
        <div>
            <h1>Grid </h1>
            <button className="btn btn-primary mr-3" onClick={()=>this.onDataFilter("local")}> Local</button>
            <button className="btn btn-primary mr-3" onClick={()=>this.onDataFilter("central")}> Central</button>
            <button className="btn btn-primary" onClick={()=>this.onDataFilter("all")}> All</button>
             <table className="table table-striped table-dark">
                <tbody>
                    <tr>
                        <th>Clientid</th>
                        <th>Name</th>
                        <th>dueAmount</th>
                        <th>type</th>
                    </tr>
                    {this.state.clientData.map((client, idx) => (
                        <tr key={idx}>
                            <td>{client.Clientid}</td>
                            <td>{client.name}</td>
                            <td>{client.dueAmount}</td>
                            <td>{client.type}</td>
                            
                        </tr>
                    ))}
                </tbody>
                </table>
        </div>
    );
}
}

export default Display5a;
