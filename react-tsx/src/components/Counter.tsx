import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>Cups added: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Add cups.</button>
    </div>
  );
};

export default Counter;
