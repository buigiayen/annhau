import React, { useEffect, useMemo, useState } from "react";
import { Form, Space } from "antd";
import CardTile from './cpn/card'
import ThemMoiThanhVien from './cpn/ThemMoiThanhVien'
import ReloadPage from '../../component/RefeshPage/index'
import { ListThanhVien } from '../../data/ThanhVien/Index';

export default function DienDan() {
    const [data, SetData] = useState([]);
    useMemo(async () => {
        await ListThanhVien().then((rs) => { SetData(rs); });
    }, [])
    return (<>
        <Form
            name="basic"
            initialValues={{
                remember: true,
            }}
            autoComplete="off"
        >
            <Space size="small">
                <Form.Item><ReloadPage></ReloadPage></Form.Item>
                <Form.Item><ThemMoiThanhVien></ThemMoiThanhVien></Form.Item>
            </Space>

        </Form>



        <br></br>
        <CardTile datasource={data} />


    </>)
}
