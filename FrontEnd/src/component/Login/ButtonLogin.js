import React, { useState } from "react";
import { Button } from "antd";
import combine from "../Icon";
const ButtonLogin = () => {
    const[load,SetLoading] = useState(false);
    return (
        <Button    icon={<combine.LoginOutlined/>} size="small" type="primary" loading={load} onClick={()=>{SetLoading(!load)}} > Login</Button>
    )
}
export default ButtonLogin;