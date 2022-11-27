import React, { useState } from "react";
import { Form, Button, Modal, Input, Avatar } from "antd";
import { PostThanhVien } from '../../../data/ThanhVien/Index'
import ChucVu from '../../../component/ChucVu/index'
import ButtonUpload from "../../../component/ButtonUploadFile/Button.Upload";

export default function Index() {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [ThanhVienPost, SetThanhVienPost] = useState({
        tenThanhVien: null,
        noiDungNgan: null,
        idChucVu: null,
        avatar: null,
        email: null,
        hienThi: true
    });
    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
        PostThanhVien(ThanhVienPost);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    const SetStateAvatar = (values) => {
        const { filePath } = values;
        SetThanhVienPost({ ...ThanhVienPost, avatar: `http://${filePath}` })
    }
    return (
        <>
            <Button onClick={showModal} type="primary">Tạo mới</Button>
            <br></br>
            <Modal
                title="Tạo mới thành viên"
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
                    <Form.Item label="Ảnh đại diện">
                        <Avatar src={ThanhVienPost.avatar}></Avatar>
                    </Form.Item>
                    <Form.Item label="Tên thành viên" required rules={[{ required: true, message: 'Xin hãy nhập tên!' }]}>
                        <Input onChange={(e) => { SetThanhVienPost({ ...ThanhVienPost, tenThanhVien: e.target.value }) }} />
                    </Form.Item>
                    <Form.Item label="Nội dung ngắn">
                        <Input onChange={(e) => { SetThanhVienPost({ ...ThanhVienPost, noiDungNgan: e.target.value }) }} />
                    </Form.Item>
                    <Form.Item label="Chức vụ">
                        <ChucVu e={(e) => { SetThanhVienPost({ ...ThanhVienPost, idChucVu: e }) }} />
                    </Form.Item>
                    {
                        !ThanhVienPost.avatar && <Form.Item label="Link Avatar">
                            <Input onChange={(e) => { SetThanhVienPost({ ...ThanhVienPost, avatar: e.target.value }) }} />
                        </Form.Item>
                    }

                    <Form.Item label="email">
                        <Input onChange={(e) => { SetThanhVienPost({ ...ThanhVienPost, email: e.target.value }) }} />
                    </Form.Item>
                    <Form.Item label="File avatar">
                        <ButtonUpload e={(e) => { SetStateAvatar(e) }}></ButtonUpload>
                    </Form.Item>

                </Form>
            </Modal>

        </>

    )
}
