import React from "react";
import PropTypes from "prop-types";

function TransactionHistory({ transactions }) {
  const result = transactions.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    );
  });

  return (
    <table className="transaction-history">
      <thead className="head">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{result}</tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.array,
};

export { TransactionHistory };
