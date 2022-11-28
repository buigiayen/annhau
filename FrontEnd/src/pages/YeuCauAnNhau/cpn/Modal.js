import React, { useState } from "react";
import { Form, Button, Modal, Input,InputNumber  } from "antd";
import ComboThanhVien from '../../../component/ThanhVien/index'
import {PostLichAnNhau} from '../../../data/LichAnNhau/index'

export default function Index(props) {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [LichPost, SetLichPost] = useState({
        noiDungAnNhau: null,
        NgayAnNhau: new Date(),
        idThanhVien: 0,
        soTienThanhToan: 0,
        cancel: true
    });
    const showModal = () => {
        setOpen(true);
        if(props.Reload !== undefined){
            props.Reload(true);
        }
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
        PostLichAnNhau(LichPost);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>
            <Button onClick={showModal} type="primary">Tạo mới</Button>
            <br></br>
            <Modal
                title="Tạo mới lịch"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                width={1000}
            >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                >

                    <Form.Item label="Nội dung">
                        <Input onChange={(e) => { SetLichPost({ ...LichPost, noiDungAnNhau: e.target.value }) }} />
                    </Form.Item>
                    <Form.Item label="Thành viên tạo">
                        <ComboThanhVien OnChangeUser={(rs) => { SetLichPost({ ...LichPost, idThanhVien: rs }) }} />
                    </Form.Item>
                    <Form.Item label="Số tiền quỹ">
                        <InputNumber onChange={(value) => { SetLichPost({ ...LichPost, soTienThanhToan: value }) }} />
                    </Form.Item>

                </Form>
            </Modal>

        </>

    )
}
