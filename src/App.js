
import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  const [points, setPoints] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const login = () => {
    setUser({ name: "John Doe", email: "john.doe@example.com" });
  };

  const handleTransaction = (amount) => {
    setTransactions([...transactions, { id: transactions.length + 1, amount }]);
    setPoints(points + amount * 0.1); // 10% of the transaction value as points
  };

  const redeemPoints = () => {
    if (points >= 100) {
      alert("You have redeemed 100 points!");
      setPoints(points - 100);
    } else {
      alert("Not enough points to redeem.");
    }
  };

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      {!user ? (
        <button onClick={login}>Login</button>
      ) : (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>

          <h3>Your Transactions</h3>
          <ul>
            {transactions.map((t) => (
              <li key={t.id}>Transaction {t.id}: ${t.amount}</li>
            ))}
          </ul>

          <h3>Your Points: {points}</h3>
          <button onClick={() => handleTransaction(50)}>Add $50 Transaction</button>
          <button onClick={() => handleTransaction(100)}>Add $100 Transaction</button>
          <button onClick={redeemPoints}>Redeem 100 Points</button>
        </div>
      )}
    </div>
  );
};

export default App;
