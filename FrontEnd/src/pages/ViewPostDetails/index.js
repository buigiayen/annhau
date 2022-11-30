import { Space } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import ThongTinThanhVien from './ThongTinThanhVien/ThongTin'
import ThoiGianThamGia from './ThongTinThanhVien/ThoiGianThamGia'
import Chartjs from '../Chart/index'
const Index = () => {

    return (<>

        <ThongTinThanhVien ></ThongTinThanhVien>
        <br></br>
        <ThoiGianThamGia ></ThoiGianThamGia>
        <br>
        </br>
        <Chartjs></Chartjs>

    </>)
}
export default Index;
