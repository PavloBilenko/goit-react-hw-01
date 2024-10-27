import React from "react";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ transaction }) => {
  return (
    <div className={s.tableContainer}>
      <table className={s.wrapper}>
        <thead>
          <tr className={s.tableNames}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
