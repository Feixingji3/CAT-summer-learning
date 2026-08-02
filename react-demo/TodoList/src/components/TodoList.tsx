import { List } from 'antd';
import type { Todo } from '../type';
import TodoItem from './TodoItem';
interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: (id: number) => void;
  deletTodo: (id: number) => void;
}
function TodoList({ todos, toggleTodo, deletTodo }: TodoListProps) {
  if (todos.length === 0) {
    return <div style={{ textAlign: 'center', padding: 20, color: '#999' }}>暂无待办事项</div>;
  }
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deletTodo={deletTodo} />
      ))}
    </List>
  );
}
export default TodoList;
