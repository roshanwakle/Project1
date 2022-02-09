import React, { Component } from "react";
class CRUD1 extends Component {
  constructor() {
    super();
    this.state = {
      editIndex: -1,
      pStatus: false,
      sRoom: false,
      store: false,
      Product: {
        productcode: "",
        productname: "",
        category: "",
        status: "",
        storetype: "",
        prodtype:"",
      },
      ProductData: [],
      PData: [],
    };
  }
  onChangeHandler = (e) => {
    console.log("change ", e.target);
    let { name, value, checked } = e.target;
    if (value === "showroom") {
      this.setState({ sRoom: true, store: false });
    }
    if (value === "store1") {
      this.setState({ sRoom: false, store: true });
    }
    if (name === "status") {
      value = checked;
      this.setState({ pStatus: checked });
    }
    let { Product } = this.state;
    this.setState({ Product: { ...Product, [name]: value } });
  };
  onSubmit = (e) => {
    e.preventDefault();
    let { ProductData, Product, editIndex } = this.state;
    if (editIndex >= 0) {
      ProductData[editIndex] = Product;
    } else {
      ProductData.push(Product);
    }
    this.setState({ ProductData, pStatus: false });
    this.setState({ PData: ProductData });
    Product = {
      productcode: "",
      productname: "",
      category: "",
      status: "",
      storetype: "",
    };
    this.setState({ Product });
    this.setState({ sRoom: false, store: false, editIndex: -1 });
  };
  onDelete = (DeleteIndex) => {
    let { PData } = this.state;
    PData.splice(DeleteIndex, 1);
    this.setState({ PData });
  };
  onEdit = (item, index) => {
    console.log("Item ", item);
    let { Product, pStatus, sRoom, store, editIndex } = this.state;
    editIndex = index;
    Product.productcode = item.Productcode;
    Product.productname = item.productname;
    Product.category = item.category;
    Product.status = item.status;
    Product.prodtype = item.prodtype;
    pStatus = item.status;
    if (item.prodtype === "showroom") {
      sRoom = true;
      store = false;
    }
    if (item.prodtype === "store1") {
      store = true;
      sRoom = false;
    }
    this.setState({ Product, pStatus, sRoom, store, editIndex });
  };

  render() {
    let { Product, pStatus, PData, sRoom, store } = this.state;
    return (
      <>
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={this.onSubmit}>
              <h5>Product</h5>
              <div className="form-group">
                <label>Product Code</label>
                <input
                  type="text"
                  className="form-control"
                  name="productcode"
                  value={Product.productcode}
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="productname"
                  value={Product.productname}
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="form-group" >
                <label >Category</label><br></br>
                <select
                  className="ml-3"
                  name="category"
                  value={Product.category}
                  onChange={this.onChangeHandler}
                >
                  <option>Select</option>
                  <option>Electronics</option>
                  <option>Electrical</option>
                </select>
              </div>
              <div className="form-group"><br></br>
                <label>Status</label>
                <input
                  type="checkbox"
                  className="ml-3"
                  name="status"
                  checked={pStatus}
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="form-group">
                <label>Type : </label>
                <span className="ml-5">showroom :</span>{" "}
                <input
                  type="radio"
                  name="prodtype"
                  checked={sRoom}
                  className="ml-3 pr-3"
                  value="showroom"
                  onChange={this.onChangeHandler}
                />
                <span className="ml-5">store1:</span>{" "}
                <input
                  type="radio"
                  name="prodtype"
                  checked={store}
                  className="ml-3 pr-3"
                  value="store1"
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-success" />
              </div>
            </form>
          </div>
          <div className="col-md-8">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Product Code</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Product Status</th>
                  <th>Store Type</th>
                </tr>
                {PData.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{item.productcode}</td>
                      <td>{item.productname}</td>
                      <td>{item.category}</td>
                      {/* <td>{item.status}</td> */}
                      {/* <td>{item.storetype}</td> */}
                      <td>
                        <input
                          type="checkbox"
                          checked={item.status}
                          onChange={() => {}}
                        />{" "}
                      </td>
                      <td>{item.prodtype}</td>
                      <td>
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
        </div>
      </>
    );
  }
}
export default CRUD1;
