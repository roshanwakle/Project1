import React,{ Component } from "react";
import axios from 'axios';
class AddVendor extends Component{
    constructor(){
        super();
        this.state={Vendor:{id:"",VendorName:"",ContactNumber:"",type:""},showMessage:''}
    }
    onChangeHandler = (e)=>
    {
        let {name, value }= e.target;
        let { Vendor } = this.state;
        this.setState({Vendor:{...Vendor,[name]:value}});
    }
    onSubmit = (e)=>
    {
        e.preventDefault();
        const URL = " http://localhost:4000/Vendor";
        axios.post(URL, this.state.Vendor).then(response=>{
            console.log(response);
            if(response.statusText ==="Created")
            {
                this.setState({showMessage:'Record has been inserted'});
            }

        });
    }
    render()
    {
        let { Vendor, showMessage} = this.state;
        return(
            <>
            <h5>Vendor </h5>
            <div>
               <span className="alert-success">{showMessage}</span>
               <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Vendor Id</label>
                    <input type="text" className="form-control" name="id" value={Vendor.id} onChange={this.onChangeHandler} />
                </div>
                <div className="form-group">
                    <label>Vendor Name</label>
                    <input type="text" className="form-control" name="VendorName" value={Vendor.VendorName} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>Contact Number</label>
                    <input type="text" className="form-control" name="ContactNumber" value={Vendor.ContactNumber} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>Type</label>
                    Active:<input type="checkbox"  name="active" value={Vendor.type} onChange={this.onChangeHandler}/>
                    Disable<input type="checkbox"  name="disable" value={Vendor.type} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                  <button type="submit">Submit</button>
                </div>
                </form>
               </div>
            </>
        )
    }
}
export default AddVendor; 