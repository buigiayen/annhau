
import { Typography } from 'antd';
import React, { useState } from 'react';
import { Markup } from 'interweave';
import Text from './NoiQuy';
const { Paragraph } = Typography;

const Index = () => {

    const [clickTriggerStr, setClickTriggerStr] = useState(Text);

    return (<Paragraph
    title='Click edit'
        editable={{
            tooltip: 'Click edit',
          
        
        }}
    >
        <Markup content={clickTriggerStr} /> 
    </Paragraph>)
}
export default Index;