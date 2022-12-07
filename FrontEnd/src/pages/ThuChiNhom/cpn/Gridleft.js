import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Mã',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Phiếu',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Chi tiết',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'address',
    key: 'address',
  }

];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const App = () => <Table 
bordered
scroll
size = 'small'
expandable
columns={columns}
 dataSource={data} 

/>;
export default App;