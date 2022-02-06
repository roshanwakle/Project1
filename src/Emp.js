import React, { useEffect, useState } from "react";
function Emp() {
  const [arrData, setArrData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let tData = [
      { empid: 1, empname: "Rajiv", empsal: 50000, dep: "web devlopement" },
      { empid: 2, empname: "Sanjivani", empsal: 50000, dep: "web devlopement" },
      { empid: 3, empname: "Mohit", empsal: 50000,dep: "Software devlopement"},
      { empid: 4, empname: "Prathamesh", empsal: 50000, dep: "web devlopement" },
      { empid: 5, empname: "Roshan", empsal: 50000, dep: "Python devlopement" },
      { empid: 6, empname: "Prajakta", empsal: 50000, dep: "web devlopement" },
    ];
    if (loading) {
      setArrData(tData);
      setLoading(false);
    }
  });
  const onSelectDepartment = (event) => {
      let { value ,options, selectedIndex } =event.target
      console.log(value)
      console.log(options[selectedIndex].text)
  };

  return (
    <>
      <h1>Employee List</h1>
      {loading ? <span>Loading data....</span> : null}

     {/* <input type="radio" name="gender" value="male">male</input>
     <input type="radio" name="gender" value="Female">Female</input> */}
      <select onChange={onSelectDepartment}>
        <option value="1">Web devlopement</option>
        <option value="3">Software devlopement</option>
        <option value="5">Python devlopement</option>
      </select>

      <table className="table table-striped">
        <tbody>
          <tr>
            <th>Emp Id</th>
            <th>Emp Name</th>
            <th>Emp Salary</th>
            <th>Emp Depatrment</th>
          </tr>
          {arrData.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{item.empid}</td>
                <td>{item.empname}</td>
                <td>{item.empid}</td>
                <td>{item.dep}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Emp;
