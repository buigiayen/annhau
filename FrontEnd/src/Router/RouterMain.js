
import {
    Routes,
    Route
} from "react-router-dom";
import ConfigRouter from "./RouterConfig";

const JSXRouter = () => {
    let arr = ConfigRouter() ?? [];
    const ALog = arr.map((rs, index) => {
        if (rs.Chilren === undefined ) {
            return (
                <Route key={index} path={rs.Link} element={rs.componentpages} />
            )
        } else {
           return rs.Chilren.map((rsc, indexs) => {
                return (
                    <Route key={indexs} path={rsc.Link} element={rsc.componentpages} />
                )
            })
        }
    })
    return ALog;
}
const RouterExportConfig = () => {
    return (
        <Routes>
            {JSXRouter()}
        </Routes>
    )

}
export default RouterExportConfig;
