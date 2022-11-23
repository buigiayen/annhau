import React, { useEffect, useMemo, useState } from 'react';
import { Select } from 'antd';
import { ListThanhVien } from '../../data/ThanhVien/Index'

const App = (props) => {

    const [Source, setSource] = useState([]);
    const OnChange = (value) => {
        if (props.OnChangeUser !== undefined) {
            props.OnChangeUser(value);
        }
    }
    useMemo(() => {
        const ComboThanhVien = [];
        ListThanhVien().then(rs => { rs.map(r => ComboThanhVien.push({ value: r.ID, label: r.TenThanhVien })) });
        setSource(ComboThanhVien);
    }, []);
    return (
        <Select
            showSearch
            placeholder="Tìm kiếm ..."
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }

            options={Source}
            onChange={(rs) => OnChange(rs)}
        />
    )

}

export default App;