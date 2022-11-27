import React from "react";
import { Button, Space, Popconfirm } from "antd";
import { DELETENoiQuy } from '../../../data/LichAnNhau/index'
import combine from "../../../component/Icon";
import Reload from '../../../component/RefeshPage/index'
import ModalListThanhVien from '../../../component/ThanhVien/ListThanhVien'
import { useState } from "react";



const TitleYeuCauAnNhau = (props) => {
    const [OpenModal, SetOpenModal] = useState();
  
    const ButtonDelete = (Value) => {
        const Body = { ID: Value, Cancel: true };
        DELETENoiQuy(Body);
        ReloadPage();
    }
    const ReloadPage = () => {
        setTimeout(() => { window.location.reload(false); }, 1000);
    }
    const { ID } = props;
    return <>
        <Space>

            <Popconfirm title="Tham gia?" okText="Yes" cancelText="No">
                <Button size='small' type="primary" icon={<combine.CheckCircleTwoTone twoToneColor="#52c41a"  ></combine.CheckCircleTwoTone>}>Tham gia</Button>
            </Popconfirm>
            <Popconfirm title="Từ chối?" okText="Yes" cancelText="No">
                <Button size='small' danger icon={<combine.LogoutOutlined  ></combine.LogoutOutlined>}>Từ chối</Button>
            </Popconfirm>
            <Button size='small' icon={<combine.SendOutlined  ></combine.SendOutlined>} onClick={() => SetOpenModal(!OpenModal)}>Gửi Email</Button>
            {OpenModal && <ModalListThanhVien Open={OpenModal}></ModalListThanhVien>}
            <Popconfirm title="Xác nhận xóa?" okText="Yes" cancelText="No" onConfirm={(e) => ButtonDelete(ID)}>
                <Button size='small' type="primary" danger icon={<combine.DeleteOutlined  ></combine.DeleteOutlined>}>Xóa</Button>
            </Popconfirm>

        </Space>

    </>

}

export default TitleYeuCauAnNhau;