import { Button, Space } from 'antd';

interface TodoFilterProps {
  setFilter: (filter: string) => void;
}
function TodoFilter({ setFilter }: TodoFilterProps) {
  return (
    <Space size="large">
      <Button type="primary" size="large" onClick={() => setFilter('all')}>
        全部
      </Button>
      <Button type="primary" size="large" onClick={() => setFilter('completed')}>
        已完成
      </Button>
      <Button type="primary" size="large" onClick={() => setFilter('uncompleted')}>
        未完成
      </Button>
    </Space>
  );
}
export default TodoFilter;
