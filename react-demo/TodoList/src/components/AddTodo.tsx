import { Button, Input, Space } from 'antd';
import { useState } from 'react';
interface AddtodoProps {
  addTodo: (text: string) => void;
}
function AddTodo({ addTodo }: AddtodoProps) {
  const [text, setText] = useState('');
  const haddleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (text.trim() == '') {
      alert('请输入任务内容');
      return;
    }
    addTodo(text);
    setText('');
  };
  return (
    <div>
      <Space.Compact size="large" block>
        <Input
          value={text}
          placeholder="请输入任务内容"
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="primary" onClick={haddleSubmit}>
          添加
        </Button>
      </Space.Compact>
    </div>
  );
}
export default AddTodo;
