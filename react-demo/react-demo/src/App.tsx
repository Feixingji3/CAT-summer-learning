import Counter from './practice/Counter';
import UserDemo from './practice/UserDemo';
import TodoList from './practice/TodoList';
import Text from './practice/useEffect';
import { Clear } from './practice/useEffect';
import Toggle from './practice/myHook';

function App() {
  return (
    <div>
      <h2>计数器</h2>
      <Counter />

      <hr />

      <UserDemo />

      <hr />
      <TodoList />

      <hr />
      <Text />
      <Clear />

      <hr />
      <Toggle />
    </div>
  );
}
export default App;
