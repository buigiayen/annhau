import React from "react";
import { useState } from "react";
import { Descriptions, Collapse, Space } from 'antd';
import TitleYeuCauAnNhau from '../cpn/TitleYeuCauAnNhau'

const { Panel } = Collapse;
export const Grid = ({ LichAnNhau }) => {

  const Descriton = () => {
    return (<>
      {LichAnNhau?.map(rs => {
        return (
          <>
            <Collapse collapsible="icon" defaultActiveKey={['1']}>
              <Panel header={rs.NoiDungAnNhau} key="1">
                <Descriptions title={rs.NoiDungAnNhau}>
                  <Descriptions.Item label="Số tiền thanh toán">{rs.SoTienThanhToan}</Descriptions.Item>
                  <Descriptions.Item label="Thành viên tạo">{rs.TenThanhVien}</Descriptions.Item>
                  <Descriptions.Item label="Ngày">{new Date(rs.NgayAnNhau).toLocaleString()}</Descriptions.Item>
                  <Descriptions.Item label="Số lượng thành viên tham gia">{rs.NgayAnNhau}</Descriptions.Item>
                  <Descriptions.Item ></Descriptions.Item>
                  <Descriptions.Item ><TitleYeuCauAnNhau ID={rs.IDLich}></TitleYeuCauAnNhau></Descriptions.Item>
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

