import React from 'react';
import { Button, Result } from 'antd';
import { ListThanhVien } from '../../data/ThanhVien/Index'
import { useState } from 'react';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const App = (Title) => {
    let { Token, IDPOST } = useParams();
    const [DataThanhVien, SetDataThanhVien] = useState([]);
    useMemo(async () => {
        ListThanhVien().then(rs => { rs.filter(r => r.Token === Token).map(m => { SetDataThanhVien(m) }) })
    }, [])
    const Router = useNavigate();
    const ReHome = () => {
      Router('/');
    }
    return (
        <Result
            status="404"
            title={`Tham dự sự kiện - ${IDPOST}`}
            subTitle={`Xin chào! ${DataThanhVien.TenThanhVien} - Bạn sẽ tham dự sự kiện lần này!`}
            extra={[
                <Button type="primary" key="console" onClick={ReHome}>
                    Tham dự 
                </Button>,
                <Button key="buy" danger>Từ chối</Button>,
            ]}
        />
    )

}
export default App;