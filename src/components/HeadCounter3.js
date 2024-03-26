import React, { useState } from 'react';

function HeadCounter3() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const inCount = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prev) => prev+1)
    }
  };
  const decrementCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <div>
      <span>Count {count}</span>

      <button onClick={incrementCount}>
        Increment
      </button>

      <button onClick={inCount}>
        Increment by 5
      </button>

      <button onClick={decrementCount}>
        Decrement
      </button>

      <button onClick={resetCount}>
        Reset
      </button>
    </div>
  );
}

export default HeadCounter3;
