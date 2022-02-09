import React, { Component } from 'react';

class CRUDE extends Component {
    constructor() {
        super();
        this.state = {editIndex :-1,cStatus:false, cLocal:false,cCentral:false, Customer: { customercode: '', customername: '', status: '', custtype: '' }, CustomerData: [], CData:[]};
    }
    onChangeHandler = (e) => {
        console.log("change ", e.target);
        let { name, value, checked } = e.target;
        if(value ==='local')
        {
            this.setState({cLocal:true,cCentral:false})
        }
        if(value ==='central') {
            this.setState({cLocal:false,cCentral:true})
        }
        if (name === 'status') {
            value = checked;
            this.setState({cStatus:checked});
        }
        let { Customer } = this.state;
        this.setState({ Customer: { ...Customer, [name]: value } });
    }
    onSubmit = (e) => {
        e.preventDefault();
        let { CustomerData, Customer, editIndex } = this.state;
        if(editIndex>=0)
        {
            CustomerData[editIndex] = Customer;
        } else {
            
            CustomerData.push(Customer);
        }        
        this.setState({CustomerData, cStatus:false});        
        this.setState({CData:CustomerData});
        Customer = { customercode: '', customername: '', status: '', custtype: '' };
        this.setState({Customer});
        this.setState({cLocal:false,cCentral:false, editIndex:-1});
    }
    onDelete = (DeleteIndex)=>{
        let  { CData } = this.state;
        CData.splice(DeleteIndex,1);
        this.setState({CData});
    }
    onEdit = (item, index)=>{
        console.log("Item ", item);
        let  { Customer, cStatus, cLocal, cCentral, editIndex } = this.state;
        editIndex = index;
        Customer.customercode = item.customercode;
        Customer.customername = item.customername;
        Customer.status = item.status;
        Customer.custtype = item.custtype;
        cStatus = item.status;
        if(item.custtype ==='local')
        {
            cLocal = true;
            cCentral = false;
        }
        if(item.custtype ==='central')
        {
            cCentral = true;
            cLocal = false;
        }
        this.setState({Customer, cStatus, cLocal, cCentral, editIndex});

    }
    render() {
        let { Customer, cStatus, CData, cLocal, cCentral } = this.state;
        return (
            <>
                <div className='row'>
                    <div className="col-md-4">
                        <form onSubmit={this.onSubmit}>
                            <h5>Customer</h5>
                            <div className="form-group">
                                <label>Customer Code</label>
                                <input type="text" className="form-control" name="customercode" value={Customer.customercode} onChange={this.onChangeHandler} />
                            </div>
                            <div className="form-group">
                                <label>Customer Name</label>
                                <input type="text" className="form-control" name="customername" value={Customer.customername} onChange={this.onChangeHandler} />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <input type="checkbox" className="ml-3" name="status" checked={cStatus} onChange={this.onChangeHandler} />
                            </div>
                            <div className="form-group">
                                <label>Type : </label>
                                <span className="ml-5">Local :</span> <input type="radio" name="custtype" checked = {cLocal} className="ml-3 pr-3" value="local" onChange={this.onChangeHandler} />
                                <span className="ml-5">Central</span> : <input type="radio" name="custtype" checked = {cCentral} className="ml-3 pr-3" value="central" onChange={this.onChangeHandler} />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-success" />
                            </div>
                        </form>
                    </div>
                    <div className='col-md-8'>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th>Customer Code</th>
                                    <th>Customer Name</th>
                                    <th>Customer Status</th>
                                    <th>Customer Type</th>
                                </tr>
                                {CData.map((item,idx)=>{
                                    return(
                                        <tr key={idx}>
                                            <td>{item.customercode}</td>
                                            <td>{item.customername}</td>
                                            <td><input type="checkbox" checked={item.status} onChange={()=>{}}/> </td>
                                            <td>{item.custtype}</td>
                                            <td><button className="btn btn-info" onClick={()=>this.onEdit(item,idx)}>Edit</button></td>
                                            <td><button className="btn btn-danger" onClick={()=>this.onDelete(idx)}>Delete</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}
export default CRUDE;