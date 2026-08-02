import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import type { Todo } from './type';
import { Layout, Typography, Space } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  const deletTodo: (id: number) => void = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };
  const showTodos = () => {
    switch (filter) {
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'uncompleted':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };
  return (
    <div>
      <Layout>
        <Header
          style={{
            backgroundColor: '#b1b5be',
            height: '70px',
            padding: '0 20px',
          }}
        >
          <Title level={1} style={{ color: '#f3f0f0', margin: '16px ' }}>
            TodoList
          </Title>
        </Header>
        <Content style={{ padding: 24, background: '#f5f5f5' }}>
          <Space orientation="vertical" size="large" style={{ display: 'flex' }}>
            <AddTodo addTodo={addTodo}></AddTodo>
            <TodoList todos={showTodos()} toggleTodo={toggleTodo} deletTodo={deletTodo}></TodoList>
          </Space>
        </Content>
        <Footer>
          <TodoFilter setFilter={setFilter}></TodoFilter>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
