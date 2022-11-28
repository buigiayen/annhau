import { Modal, Checkbox, Input } from "antd";
import { useMemo } from "react";
import { useState } from "react";
import { ListThanhVien } from '../../data/ThanhVien/Index'
const { TextArea } = Input;
const ModalListThanhVien = (props) => {
    const { Open } = props;
    const [ShowModal, SetShowModal] = useState(Open ?? false);
    const [checked, setChecked] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const [dataListThanhVien, SetListThanhVien] = useState([]);
    const onChange = (e) => {
        console.log('checked = ', e);
        if (e !== []) {
            const CheckedIndex = e;
            const EmailSending = [];
            CheckedIndex.forEach(Index => {
                console.log(Index);
                console.log(dataListThanhVien.filter(p => p.ID === Index))
            });
          
        }

    };
    useMemo(async () => {
        const DataThanhVienValues = []
        await ListThanhVien().then(rs => {
            console.log(rs);
            rs.map(index => { DataThanhVienValues.push({ value: index.ID, label: index.TenThanhVien, disabled: index.email === null ?? false }) })
        })
        SetListThanhVien(DataThanhVienValues);
    }, [])
    return (
        <Modal
            title="Danh sách thành viên"
            centered
            open={ShowModal}
            onOk={() => SetShowModal(false)}
            onCancel={() => SetShowModal(false)}
            width={1500}

        >
            <Checkbox.Group style={{ width: '100%' }} defaultValue={dataListThanhVien} options={dataListThanhVien} onChange={onChange}>

            </Checkbox.Group>
            <hr></hr>
            Nội dung tâm thư

            <TextArea >
            </TextArea>
            <small style={{ color: 'red' }}>Link tham dự được gửi kèm theo Email</small>
        </Modal>
    )

}
export default ModalListThanhVien;