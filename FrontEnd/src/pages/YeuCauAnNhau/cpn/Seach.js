
import { Space, Button, Input, DatePicker } from 'antd';
import { useState } from 'react';
import moment from 'moment';
import combine from '../../../component/Icon/index'

const dateFromFormat = 'YYYY/MM/DD';
const { RangePicker } = DatePicker;
const QuerySearch = (props) => {

    const [DataPage, setDataPage] = useState({ TextFind: null, FormDate: null ,ToDate: null });
    const Change = () => {
        if (props.e !== undefined) {
            console.log(DataPage);
            props.e(DataPage);
        }
    }
    return (
        <Space size="small">
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
            <Input placeholder='Tìm ...' onChange={(e) => { setDataPage({ ...setDataPage, TextFind: e.target.value }) }}></Input>
            <Button type="primary" icon={<combine.SearchOutlined />} onClick={Change}>Tìm kiếm</Button>
        </Space>
    )
}
export default QuerySearch;