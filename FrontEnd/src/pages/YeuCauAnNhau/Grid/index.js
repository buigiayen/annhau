import React from "react";
import { Table } from "antd";
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
 
export const Grid = ({dataSource}) =>{
 return <Table dataSource={dataSource} columns={columns} />;
}
