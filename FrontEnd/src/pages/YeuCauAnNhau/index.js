import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { Space, Form } from 'antd';
import { Grid } from "./Grid/index";
import { GETLichAnNhau } from '../../data/LichAnNhau/index'
import Modal from './cpn/Modal'
import ReloadPage from '../../component/RefeshPage/index'
import QuerySearch from './cpn/Seach'


export default function Index() {
  const [LichAnNhau, SetDataLichAnNhau] = useState();
  const functionGetAPI = (value) => {
    GETLichAnNhau(value).then(rs => SetDataLichAnNhau(rs));
  }
  useState(async () => {
    functionGetAPI(null);
  }, [])

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item>
        <Space size="small">
          <ReloadPage></ReloadPage>
          <Modal></Modal>
          <QuerySearch e={(e) => { functionGetAPI(e) }}></QuerySearch>
        </Space>
      </Form.Item>
      <Form.Item >
        <Grid LichAnNhau={LichAnNhau}></Grid>
      </Form.Item>
    </Form>
  )
}
