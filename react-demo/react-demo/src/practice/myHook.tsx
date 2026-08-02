import { useState } from 'react';

function myHook() {
  const [value, setValue] = useState(true);
  const toggle = () => setValue(!value);
  return {
    value,
    toggle,
  };
}
function Toggle() {
  const { value, toggle } = myHook();
  return (
    <div>
      {value && <div>This is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  );
}

export default Toggle;
