import React, { useMemo, useState } from "react";
import { Select } from "antd";
import { GETchucVu } from '../../data/ChucVu/index'
const App = (props) => {

    const handleChange = (value) => {
        if (props.e !== undefined) {
            props.e(value);
        }
    }
    const [Data, SetData] = useState([]);
    useMemo(async () => {
        const MapChucVu = [];
        await GETchucVu().then(rs => {rs.map(rsI => { MapChucVu.push({ label: rsI.TenChucVu, value: rsI.ID }) }) })
        SetData(MapChucVu);
    }, [])
    return (
        <>
            <Select
                placeholder="Chọn chức vụ ..."
                onChange={(value) => handleChange(value)}
                options={Data}
            />
        </>
    )

}

export default App;