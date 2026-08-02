import type { Todo } from '../type';
import { Button, Space } from 'antd';
interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deletTodo: (id: number) => void;
}
function TodoItem({ todo, toggleTodo, deletTodo }: TodoItemProps) {
  return (
    <Space.Compact block style={{ width: '100%' }}>
      <div
        style={{
          flex: 1,
          padding: '0 12px',
          lineHeight: '40px',
          textDecoration: todo.completed ? 'line-through' : 'none',
          background: '#fff',
          border: '1px solid #d9d9d9',
          borderRight: 0,
        }}
      >
        {todo.text}
      </div>
      <Button type="default" size="large" onClick={() => toggleTodo(todo.id)}>
        切换
      </Button>
      <Button danger size="large" onClick={() => deletTodo(todo.id)}>
        删除
      </Button>
    </Space.Compact>
  );
}
export default TodoItem;
