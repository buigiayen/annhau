
import { Card, Button, Input, DatePicker, Col, Row } from 'antd';
import { useState } from 'react';
import moment from 'moment';
import { Content } from 'antd/lib/layout/layout';
import combine from '../../component/Icon/index'

const dateFromFormat = 'YYYY/MM/DD';
const { RangePicker } = DatePicker;
const QuerySearch = (props) => {

    const [DataPage, setDataPage] = useState({ TextFind: null, FormDate: null, ToDate: null });
    const Change = () => {
        if (props.e !== undefined) {
            console.log(DataPage);
            props.e(DataPage);
        }
    }
    return (
        <Card title="Tìm kiếm" size="small" >
            <Content>
                <Row>

                    <Col xs={24} xl={4}>
                        <RangePicker renderExtraFooter={() => 'Từ ngày đến ngày'}
                            onChange={(dateStrings) => {
                                console.log(dateStrings)
                                if (dateStrings === undefined || dateStrings === null) {
                                    setDataPage({ ...setDataPage, FromDate: null, ToDate: null })
                                } else {
                                    setDataPage({ ...setDataPage, FromDate: moment(dateStrings[0]).utc().format(dateFromFormat), ToDate: moment(dateStrings[1]).utc().format(dateFromFormat) })
                                }

                            }}
                        />
                    </Col>
                    <Col xs={24} xl={4}>
                        <Input placeholder='Tìm ...' onChange={(e) => { setDataPage({ ...setDataPage, TextFind: e.target.value }) }}></Input>
                    </Col>
                    <Col xs={24} xl={4}>
                        <Button type="primary" icon={<combine.SearchOutlined />} onClick={Change}>Tìm kiếm</Button>
                    </Col>
                </Row>
            </Content>
        </Card>




    )
}
export default QuerySearch;