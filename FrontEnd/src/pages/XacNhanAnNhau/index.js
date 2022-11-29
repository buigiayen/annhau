import { useParams } from "react-router-dom";

const Index = () => {
    let { Token, IDPOST } = useParams();
    return (<>
    {Token} - {IDPOST}
    </>)
}
export default Index;