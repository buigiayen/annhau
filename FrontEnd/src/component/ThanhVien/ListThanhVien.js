import { Modal, Checkbox, Input } from "antd";
import { useMemo } from "react";
import { useState } from "react";
import { ListThanhVien } from '../../data/ThanhVien/Index'
import {POSTEmail} from '../../data/Email/index'
const { TextArea } = Input;
const ModalListThanhVien = (props) => {
    const { Open } = props;
    const [ShowModal, SetShowModal] = useState(Open ?? false);
    const [checked, setChecked] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const [dataListThanhVien, SetListThanhVien] = useState([]);
    const [ObjectEmail, SetObjectEmail] = useState({
        title: null,
        body: null,
        listEmialDetails: [
            {
                mailTo: "buiyen4696@gmail.com",
            }
        ],
    })
    const onChange = (e) => {
        console.log('checked = ', e);
        if (e !== []) {
            const CheckedIndex = e;      
            const EmailSend = [];
            CheckedIndex.forEach(Index => {
                EmailSend.push(dataListThanhVien.filter(p => p.value === Index));
            });
           
            SetObjectEmail()
        }

    };
    const OnOK = () => {
        if (ObjectEmail.listEmialDetails !== []) {
            POSTEmail({title:"Test",body:"body",listEmialDetails : ObjectEmail.listEmialDetails});
        }

    }
    useMemo(async () => {
        const DataThanhVienValues = []
        await ListThanhVien().then(rs => {
            rs.map(index => { DataThanhVienValues.push({ value: index.ID, label: index.TenThanhVien, mailTo: index.email, disabled: index.email === null ?? false }) })
        })
        SetListThanhVien(DataThanhVienValues);
    }, [])
    return (
        <Modal
            title="Danh sách thành viên"
            centered
            open={ShowModal}
            onOk={() => OnOK()}
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