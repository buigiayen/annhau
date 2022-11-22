import { Card, Col, Row, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';
import { Avatar, Rate } from 'antd';
import Title from './Tag';

const { Meta } = Card;


const description = (Sologan, Rates) => {
    return (<>{Sologan} <br /> <Rate disabled defaultValue={Rates} /></>)
}
const ConvertTag = (IDChucVu) => {
    switch (IDChucVu) {
        case 1: return "#f50";
        case 2: return "#108ee9";
        default: return "#108ee9";
    }

}
const index = (props) => {

    const GetData = () => {
        const Navigate = useNavigate();
        const valueArr = props.datasource.map((data) => {
            return (
                <Col flex="1 1 300px" >
                    <Card
                        style={{ width: 300 }}
                        actions={[
                            <EditOutlined key="edit" title='Lịch ăn nhậu chi tiết' onClick={() => { Navigate(`/${data.ID}/View`) }} />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src={data.Avatar} />}
                            title={Title(ConvertTag(data.IDChucVu), data.TenThanhVien)}
                            description={description(data.NoiDungNgan, data.Rate)}
                        />
                    </Card>
                </Col>
            )
        })
        return valueArr;
    }
    return (
        <Row gutter={12} >
            <GetData />
        </Row>
    )


}


export default index;