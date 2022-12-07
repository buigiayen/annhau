import React from 'react';
import { Col, Row, Card, Layout } from 'antd';
import Gridleft from './cpn/Gridleft'
import GridRight from './cpn/GridRight'
import { Content } from 'antd/lib/layout/layout';
import QuerySearch from '../../component/QuerrySelect/index'

const index = () => (
  <>

    <Content>


      <QuerySearch></QuerySearch>
      <br></br>
      <Row>
        <Col xs={24} xl={8} >
          <Card title="Phiếu" size="small">
            <Gridleft></Gridleft>
          </Card>
        </Col>
        <Col xs={24} xl={16}>
          <Card title="Giao dịch chi tiết" size="small">
            <GridRight></GridRight>
          </Card>
        </Col>
      </Row>
    </Content>
  </>

);

export default index;