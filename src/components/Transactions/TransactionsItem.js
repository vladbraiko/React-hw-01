import React from "react";
import PropTypes from "prop-types";

function TransactionHistoryItem({ transactions }) {
  const result = transactions.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    );
  });

  return <>{result}</>;
}

TransactionHistoryItem.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export { TransactionHistoryItem };
