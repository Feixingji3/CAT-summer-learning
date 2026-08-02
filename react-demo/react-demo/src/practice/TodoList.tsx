import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

const TodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([{ id: 1, text: '学习React' }]);

  // 新增
  const addTodo = () => {
    const newTodo: Todo = {
      id: 2,
      text: '学习TS',
    };
    setTodoList([...todoList, newTodo]);
  };
  const delTodo = (id: number) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };
  return (
    <div>
      <button onClick={addTodo}>新增待办</button>
      {todoList.map((item) => (
        <div key={item.id}>
          <span>{item.text}</span>
          <button onClick={() => delTodo(item.id)}>删除</button>
        </div>
      ))}
    </div>
  );
};
export default TodoList;
