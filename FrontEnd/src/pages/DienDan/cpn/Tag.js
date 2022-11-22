import { Tag } from 'antd';

const Title = (LV, Value ) => {
    return (<>
        <Tag color={LV} >{Value}</Tag>
    </>)
}
export default Title;