import { Modal, Checkbox } from "antd";
import { useMemo } from "react";
import { useState } from "react";
import { ListThanhVien } from '../../data/ThanhVien/Index'
const ModalListThanhVien = (props) => {
    const { Open } = props;
    const [ShowModal, SetShowModal] = useState(Open ?? false);
    const [checked, setChecked] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const [dataListThanhVien, SetListThanhVien] = useState([]);
    const onChange = (e) => {
        console.log('checked = ', e.target.checked);
        setChecked(e.target.checked);
    };
    useMemo(async () => {
        const DataThanhVienValues = []
        await ListThanhVien().then(rs => {
        
            rs.map(index => { DataThanhVienValues.push({ value: index.ID, label: index.TenThanhVien }) })
           
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
            <Checkbox.Group  style={{ width: '100%' }} defaultValue={dataListThanhVien}  options={dataListThanhVien} >

            </Checkbox.Group>

        </Modal>
    )

}
export default ModalListThanhVien;