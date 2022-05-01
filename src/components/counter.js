import React, { useState } from "react";

function Counter(props) {
  console.log(props);
  const { name, setCount, count } = props;
  const [votes, setVotes] = useState(0);

  const increment = () => {
    setVotes(votes + 1);
    setCount(count + 1);
  };
  const decrement = () => {
    setVotes(votes - 1);
    setCount(count - 1);
  };

  return (
    <div style={{ backgroundColor: "grey", margin: "10px" }}>
      <h2>
        {props.name} votes: {votes}
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}
export default Counter;
