import React, { Component } from "react";
import axios from "axios";
class UpdateVendor extends Component {
  constructor() {
    super();
    this.state = {
      Vendor: { id: "", VendorName: "", ContactNumber: "", type: "" },
      Vdata: [],
      VendorData: [],
      showMessage: "",
      cStatus: false,
      editIndex: -1,
    };
  }
  componentDidMount() {
    const { Vdata } = this.state;
    const URL = "http://localhost:4000/Vendor";
    axios.get(URL).then((response) => {
      console.log(response);
      if (response.statusText === "OK") {
        this.setState({ showMessage: "Loaded", Vdata: response.data });
      }
    });
  }
  onChangeHandler = (e) => {
    let { name, value, checked } = e.target;
    let { Vendor } = this.state;

    if (name === "type") {
      value = checked;
      this.setState({ cStatus: checked });
    }
    this.setState({ Vendor: { ...Vendor, [name]: value } });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { Vendor } = this.state;
    const URL = "http://localhost:4000/Vendor/" + Vendor.id;
    axios.put(URL, this.state.Vendor).then((response) => {
      console.log(response);
      if (response.statusText === "OK") {
        this.setState({ showMessage: "Record has been updated" });
      }
    });
  };
  onDelete = (DeleteIndex) => {
    let { Vdata } = this.state;
    Vdata.splice(DeleteIndex, 1);
    this.setState({ Vdata });
  };
  onEdit = (item, index) => {
    console.log("Item ", item);
    let { Vendor, cStatus, editIndex } = this.state;
    editIndex = index;
    Vendor.id = item.id;
    Vendor.VendorName = item.VendorName;
    Vendor.ContactNumber = item.ContactNumber;
    Vendor.type = item.type;

    cStatus = item.status;

    this.setState({ Vendor, cStatus, editIndex });
  };
  render() {
    let { Vendor, showMessage, cStatus, Vdata } = this.state;
    return (
      <>
        <div className="container">
          <div className="col-md-12">
            <h5>Vendor </h5>
            <div>
              <span className="alert-success">{showMessage}</span>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Vendor Id</label>
                  <input
                    type="text"
                    className="form-control"
                    name="id"
                    value={Vendor.id}
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Vendor Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="VendorName"
                    value={Vendor.VendorName}
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Contact Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ContactNumber"
                    value={Vendor.ContactNumber}
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Type :</label>
                  <input
                    type="checkbox"
                    name="type"
                    checked={cStatus}
                    value={Vendor.type}
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-outline-success" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
         <div className="mb-3">

         </div>
        <div className="col-md-12 ">
          <table className="table table-hover table-dark">
            <tbody>
              <tr>
                <th>Vendor Id</th>
                <th>Vendor Name</th>
                <th>Contact Number</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
              {Vdata.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{item.id}</td>
                    <td>{item.VendorName}</td>
                    <td>{item.ContactNumber}</td>
                    {/* <td>{item.type}</td> */}
                    <td>
                      <input
                        type="checkbox"
                        checked={item.type}
                        onChange={() => {}}
                      />{" "}
                      <button
                        className="btn btn-info"
                        onClick={() => this.onEdit(item, idx)}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.onDelete(idx)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default UpdateVendor;
