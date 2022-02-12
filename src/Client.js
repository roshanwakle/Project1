import React, { useState } from "react";
import { Link } from "react-router-dom";
function Client() {
  const CData = [
    { Clientid: 1, Clientname: "Prakash" },
    { Clientid: 2, Clientname: "Raju" },
    { Clientid: 3, Clientname: "Pallavi" },
    { Clientid: 4, Clientname: "Ravi" },
    { Clientid: 5, Clientname: "Sahil" },
  ];
  const [ ClientData, setClientData ] = useState(CData);
  return (
    <>
      <div className="col-md-6">
        <h5>Client Data</h5>

        <table className="table table-dark">
          <tbody>
            {ClientData.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{item.Clientid}</td>
                  <td>{item.Clientname}</td>

                  <td>
                    <Link
                      className="btn btn-primary"
                      to={`/client/${item.Clientid}/${item.Clientname}`}
                    >
                      {item.Clientname}
                    </Link>
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

export default Client;
