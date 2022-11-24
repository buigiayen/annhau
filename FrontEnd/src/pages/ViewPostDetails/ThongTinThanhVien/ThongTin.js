import React , {useMemo, useState} from "react";
import { useParams } from "react-router-dom";
import { Descriptions, Avatar } from 'antd';
import { ThanhVienFind } from '../../../data/ThanhVien/Index'

const Index = () => {
    let { ID } = useParams();
    const [DataThanhVien, SetDataThanhVien] = useState([]);
    useMemo(async () => {
        const Body = { ID: ID }
        await ThanhVienFind(Body).then((rs) => { SetDataThanhVien(rs[0]) })
    }, [])
    return (<>
        <Descriptions title="Thông tin thành viên" bordered>
            <Descriptions.Item span={3}>
                <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} src={DataThanhVien.Avatar} />
            </Descriptions.Item>
            <Descriptions.Item label="Mã thành viên" >{DataThanhVien.ID}</Descriptions.Item>
            <Descriptions.Item label="Tên thành viên" >{DataThanhVien.TenThanhVien}</Descriptions.Item>
            <Descriptions.Item label="Nội dung ngắn">{DataThanhVien.NoiDungNgan}</Descriptions.Item>
            <Descriptions.Item label="Rank">{DataThanhVien.TenChucVu}</Descriptions.Item>
        </Descriptions>
    </>)
}
export default Index;
