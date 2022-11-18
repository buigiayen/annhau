import { Card, Col, Row, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';
import { Avatar, Rate } from 'antd';

const { Meta } = Card;

const Title = (Title, ChucVu, LV) => {
    return (<>
        {Title} -  <Tag color={LV == 1 ? "volcano" : "geekblue"} >{ChucVu}</Tag>

    </>)
}
const description = (Sologan, Rates) => {
    return ( <>{Sologan} - <Rate disabled defaultValue={Rates}/></> )
}
const index = (props) => {
    console.log(props);
    const GetData = () => {
        const Navigate =useNavigate();
        console.log(props);
        const valueArr = datasource.map((data) => {
            return (
                <Col flex="1 1 300px" >
                    <Card
                        style={{ width: 300 }}
                        actions={[
                            <EditOutlined key="edit" title='Lịch ăn nhậu chi tiết' onClick={() => {Navigate(`/${data.ID}/View`)}} />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src={data.Avatar} />}
                            title={Title(data.TenThanhVien, data.ChucVu, data.IDChucVu)}
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