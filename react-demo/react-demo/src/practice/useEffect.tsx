import { useEffect, useState } from 'react';

export default function Text() {
  const [count, setCount] = useState(0);
  //1.没有依赖项，初始+组件更新
  //   useEffect(() => {
  //     console.log('副作用开启了');
  //   });

  //2.传入空数组，初始执行一次
  //   useEffect(() => {
  //     console.log('副作用开启了');
  //   }, []);

  //3.传入特定依赖项 初始+依赖项变化时执行
  useEffect(() => {
    console.log('副作用开启了');
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+{count}</button>
    </div>
  );
}
function Son() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('定时器执行中');
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <p>This is son</p>;
}
export function Clear() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <Son />}
      <button onClick={() => setShow(false)}>卸载Son组件</button>
    </div>
  );
}
