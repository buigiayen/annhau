import { Button } from "antd"
import { useState } from "react";
import combine from '../Icon';
const Resetpage = () => {
    const[Loadding, SetLoading] = useState(false);
    const Reload = () => {
        SetLoading(true);
        window.location.reload(false);
       
    }
    return (<Button onClick={Reload} icon={<combine.ReloadOutlined/>} loading={Loadding}>Reload</Button>)
}
export default Resetpage;