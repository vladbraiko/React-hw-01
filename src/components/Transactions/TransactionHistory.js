import React from "react";
import PropTypes from "prop-types";
import { TransactionHistoryItem } from "./TransactionsItem";

function TransactionHistory({ transactions }) {
  return (
    <table className="transaction-history">
      <thead className="head">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <TransactionHistoryItem transactions={transactions} />
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export { TransactionHistory };
