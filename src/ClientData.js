import React, { useState, useEffect } from "react";
function ClientData() {
  const arrClient = [
    { clientid: 1, clientname: "Client 1 Pvt Ltd" },
    { clientid: 2, clientname: "Client 2 Pvt Ltd" },
    { clientid: 3, clientname: "Client 3 Pvt Ltd" },
  ];
  const [clientid, setClientId] = useState(1);
  const [clientName, setClientName] = useState("");
  const [clientData, setClientData] = useState(arrClient);
  console.log("Client at function level ...");
  useEffect(() => {
    console.log("useEffect ", clientData);
  }, [clientid, clientName, clientData]);
  const AddClient = () => {
    let tempClientData = clientData;
    tempClientData.push({ clientid: 4,      clientname: "Client 4 Pvt Ltd" });
    setClientData([...tempClientData]);
  };
  return (
    <>
      <h1>Client</h1>
      <h5>Client Id : {clientid}</h5>
      <button onClick={() => setClientId(clientid + 1)}>Set Client Id</button>
      <h5>Client Name : {clientName}</h5>
      <button onClick={() => setClientName("Client 1 ")}>
        Set Client Name
      </button>
      <div>
        {clientData.map((item, idx) => {
          return (
            <p key={idx}>
              {item.clientid} {item.clientname}
            </p>
          );
        })}
      </div>
      <div>
        <button onClick={() => AddClient()}>Set Client</button>
      </div>
    </>
  );
}

export default ClientData;
