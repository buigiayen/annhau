import React, { useEffect, useMemo, useState } from "react";
import CardTile from './cpn/card'

import { ListThanhVien } from '../../data/ThanhVien/Index';
export default function DienDan() {
    const[data,SetData] = useState();
    useEffect(async() =>{
        const data = await ListThanhVien();
        SetData(data.data);
    } , [])
    return (<>
        <CardTile data/>
    </>) 
}
