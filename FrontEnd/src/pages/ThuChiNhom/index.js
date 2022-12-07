import React from 'react';
import { Col, Row } from 'antd';
import Gridleft from './cpn/Gridleft'

const index = () => (
  <Row>
    <Col span={18} push={6}>
    col-6 col-pull-18   
    </Col>
    <Col span={6} pull={18}>
    <Gridleft></Gridleft>
     
    </Col>
  </Row>
);

export default index;