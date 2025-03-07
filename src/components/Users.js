import React, { useState } from "react";

const Users = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  const ChangeCpunt = () => {
    setCount(count + 1);
    setCount2(count2 + 1);
  }

  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Count: {count}</h3>
      <h3>Count2: {count2}</h3>
      <button onClick={ChangeCpunt}>Increase Count</button>
    </div>
  );
};

export default Users;
