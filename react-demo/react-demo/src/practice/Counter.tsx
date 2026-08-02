import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const add = () => setCount((prev) => prev + 1);
  const reduce = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));
  const reset = () => setCount(0);

  return (
    <div>
      <h2>数值：{count}</h2>
      <button onClick={add}>+1</button>
      <button onClick={reduce}>-1</button>
      <button onClick={reset}>重置</button>
    </div>
  );
};
export default Counter;
