import { Modal, Checkbox, Input } from "antd";
import { useMemo } from "react";
import { useState } from "react";
import { ListThanhVien } from '../../data/ThanhVien/Index'
import { POSTEmail } from '../../data/Email/index'
const { TextArea } = Input;
const ModalListThanhVien = (props) => {
    const { Open, IDPost } = props;
    const [ShowModal, SetShowModal] = useState(Open ?? false);
    const [dataListThanhVien, SetListThanhVien] = useState([]);
    const [ObjectEmail, SetObjectEmail] = useState({
        title: null,
        body: null,
        ListEmailDetails: [
            {
                MailTo: "",
            }
        ],
    })
    const onChange = (e) => {
        console.log('checked = ', e);
        if (e !== []) {
            const CheckedIndex = e ?? [];
            const ListEmailDetails = [];
            dataListThanhVien.filter(p => CheckedIndex.includes(p.value)).map(rs => {
                ListEmailDetails.push(rs);
            })
            SetObjectEmail({ ...ObjectEmail, ListEmailDetails })
        }

    };
    const OnOK = () => {

        if (ObjectEmail.ListEmailDetails !== []) {
            const BodyEmail = [];
            ObjectEmail.ListEmailDetails.forEach(element => {
                return (
                BodyEmail.push({MailTo: element.MailTo, Body: ObjectEmail.body + "<br></br>" + Replyboy(element.Token)})
            )
            });
            console.log(BodyEmail);
            POSTEmail({ title: "Thư mời ăn nhậu!", ListEmailDetails: BodyEmail });
        }

    }
    const Replyboy = (Token) => {
        let httplocation = window.location.origin + `/confirm/${Token}/${IDPost}`;
        return httplocation;
    }
    useMemo(async () => {
        const DataThanhVienValues = []
        await ListThanhVien().then(rs => {
            rs.map(index => { DataThanhVienValues.push({ value: index.ID, label: index.TenThanhVien, MailTo: index.email, Token : index.Token , disabled: index.email === null ?? false }) })
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

            <TextArea onChange={(e) => { SetObjectEmail({ ObjectEmail, body: e.target.value }) }}>
            </TextArea>
            <small style={{ color: 'red' }}>Link tham dự được gửi kèm theo Email</small>
        </Modal>

    )

}
export default ModalListThanhVien;