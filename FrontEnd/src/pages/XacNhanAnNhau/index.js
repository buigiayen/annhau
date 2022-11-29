import { useParams } from "react-router-dom";
import Confirm from "../Confirm/index";
const Index = () => {
    let { Token, IDPOST } = useParams();
    return (<>
    <Confirm></Confirm>
    </>)
}
export default Index;