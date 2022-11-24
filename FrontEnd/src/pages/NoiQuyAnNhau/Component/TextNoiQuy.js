
import { Typography,Button } from 'antd';
import React, { useMemo, useState } from 'react';
import { Markup } from 'interweave';
import { GETNoiQuy, PUTNoiQuy } from '../../../data/NoiQuy/NoiQuy';
import CkEditor from '../../../component/ckEditor/Index'

const Index = () => {
    const [clickTriggerStr, setClickTriggerStr] = useState();
    useMemo(async () => {
        GETNoiQuy().then(rs => setClickTriggerStr(rs[0].NoiDung))
    }, [])

    const PutNoiQuy = async () => {
        await PUTNoiQuy({ NoiDung: clickTriggerStr, NgayBanHanh: new Date() });
    }
    return (
        <>
            <CkEditor Title={"Nội quy"} Value ={clickTriggerStr} e={(e) => { setClickTriggerStr(e) }}></CkEditor>
            <Button onClick={PutNoiQuy}>Save</Button>
        </>


    )
}
export default Index;