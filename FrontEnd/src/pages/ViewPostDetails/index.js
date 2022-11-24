import { Space } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import ThongTinThanhVien from './ThongTinThanhVien/ThongTin'
import ThoiGianThamGia from './ThongTinThanhVien/ThoiGianThamGia'

const Index = () => {

    return (<>

        <ThongTinThanhVien ></ThongTinThanhVien>
        <br></br>
        <ThoiGianThamGia ></ThoiGianThamGia>


    </>)
}
export default Index;
