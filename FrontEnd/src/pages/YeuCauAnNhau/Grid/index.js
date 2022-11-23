import React from "react";
import { useState } from "react";
import { Descriptions, Collapse, Space } from 'antd';


const { Panel } = Collapse;
export const Grid = ({ LichAnNhau }) => {

  const Descriton = () => {
    return (<>
      {LichAnNhau?.map(rs => {
        return (
          <>
            <Collapse collapsible="header" defaultActiveKey={['1']}>
              <Panel  header={rs.NoiDungAnNhau} key="1">
                <Descriptions title={rs.NoiDungAnNhau}>
                  <Descriptions.Item label="Số tiền thanh toán">{rs.SoTienThanhToan}</Descriptions.Item>
                  <Descriptions.Item label="Thành viên tạo">{rs.TenThanhVien}</Descriptions.Item>
                  <Descriptions.Item label="Ngày">{new Date(rs.NgayAnNhau).toLocaleString()}</Descriptions.Item>
                  <Descriptions.Item label="Số lượng thành viên tham gia">{rs.NgayAnNhau}</Descriptions.Item>
                </Descriptions>
              </Panel>
            </Collapse>
            <br></br>
          </>

        )

      })}
    </>)
  }

  return (
    <Descriton></Descriton>
  )
}

