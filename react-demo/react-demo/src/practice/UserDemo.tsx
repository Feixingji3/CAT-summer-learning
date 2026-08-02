import { useState } from 'react';

function User({ name, age }: { name: string; age: number }) {
  return (
    <div>
      <p>
        姓名：{name}，年龄：{age}
      </p>
    </div>
  );
}

function UserDemo() {
  const [user, setUser] = useState({ name: '小明', age: 18 });
  const changeUser = () => {
    setUser({
      ...user,
      name: '小红',
      age: user.age + 1,
    });
  };
  return (
    <div>
      <h2>用户信息</h2>
      <User {...user} />
      <button onClick={changeUser}>更新用户信息</button>
    </div>
  );
}
export default UserDemo;
