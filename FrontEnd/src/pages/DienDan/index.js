import React, { useEffect, useMemo, useState } from "react";
import CardTile from './cpn/card'

import { ListThanhVien } from '../../data/ThanhVien/Index';
export default function DienDan() {
    const [data, SetData] = useState([]);
    useMemo(async () => {
        await ListThanhVien().then((rs) => { SetData(rs); });
    }, [])
    return (<>
        <CardTile datasource={data} />
    </>)
}
