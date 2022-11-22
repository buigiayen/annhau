
import { Typography } from 'antd';
import React, { useMemo, useState } from 'react';
import { Markup } from 'interweave';
import { GETNoiQuy } from '../../../data/NoiQuy/NoiQuy';
import CkEditor from '../../../component/ckEditor/Index'
const { Paragraph } = Typography;

const Index = () => {
    const [clickTriggerStr, setClickTriggerStr] = useState();
    useMemo(async () => {
        GETNoiQuy().then(rs => setClickTriggerStr(rs[0].NoiDung))
    }, [])
    return (
        <CkEditor Value ={clickTriggerStr} Title={"Nội quy"}></CkEditor>

    )
}
export default Index;