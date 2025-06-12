import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions && transactions.length > 0 ? (
          transactions.map(transaction => (
            <Transaction key={transaction._id} transaction={transaction} />
          ))
        ) : (
          <li>No transactions to display.</li>
        )}
      </ul>
    </>
  );
};
