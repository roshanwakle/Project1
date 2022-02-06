import React, { useState } from "react";

function LoanCal() {
  const [Amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [Months, setMonth] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateSal = (e) => {
    console.log(Amount, interest, Months, monthlyPayment);
    e.preventDefault();

    const formValid =
      Amount >= 0 && 0 <= interest && interest <= 100 && Months > 0;

    if (!formValid) {
      return;
    }
    setMonthlyPayment((Amount * (interest / 100)) / Months);
  };
  return (
    <div>
      <form onSubmit={calculateSal}>
        <div className="form-group">
          <label>loan amount :</label>
          <input
            type="text"
            className="form-control"
            value={Amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter your amount"
          />
        </div>
        <div className="form-group">
          <label>interest rate :</label>
          <input
            type="text"
            className="form-control "
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="Enter your Rate of intrest"
          />
        </div>
        <div className="form-group">
          <label>number of months :</label>
          <input
            type="text"
            className="form-control "
            value={Months}
            onChange={(e) => setMonth(e.target.value)}
            placeholder="Enter your Months "
          />
        </div>
        <button type="submit" className="btn btn-info">
          calculate :
        </button>
      </form>
      <p>monthly payment: {monthlyPayment.toFixed(2)}</p>
    </div>
  );
}
export default LoanCal;
