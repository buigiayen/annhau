
import { Space, Button, Input,DatePicker } from 'antd';
import { useState } from 'react';
import combine from '../../../component/Icon/index'


const { RangePicker } = DatePicker;
const QuerySearch = (props) => {
    const [DataPage, setDataPage] = useState({ TextFind: null, ToDate: new Date(), FromDate: new Date() });
    const Change = () => {
        if (props.e !== undefined) {
            props.e(DataPage);
        }
    }
    return (
        <Space size="small">
            <RangePicker renderExtraFooter={() => 'Từ ngày đến ngày'} onChange={(e) => setDataPage({ ...setDataPage, FromDate: (e[0].toDate()), ToDate :(e[1].toDate())  })} />
            <Input placeholder='Tìm ...' onChange={(e) => { setDataPage({ ...setDataPage, TextFind: e.target.value }) }}></Input>
            <Button type="primary" icon={<combine.SearchOutlined />} onClick={Change}>Tìm kiếm</Button>
        </Space>
    )
}
export default QuerySearch;