import React from "react";
import PropTypes, { shape } from "prop-types";
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
        {transactions.map((item) => (
          <tr key={item.id}>
            <TransactionHistoryItem
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    shape({
      id: PropTypes.string,
    }).isRequired
  ),
};

export { TransactionHistory };
