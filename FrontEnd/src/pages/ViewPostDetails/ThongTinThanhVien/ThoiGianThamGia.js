import React, { useMemo, useState } from "react";
import { Descriptions, Avatar, Steps, List } from 'antd';

const Index = () => {
    const data = [
        {
            title: 'Ant Design Title 1',
            current: 0,
        },
        {
            title: 'Ant Design Title 2',
            current: 1,
            status: 'error',
        },
        {
            title: 'Ant Design Title 3',
            current: 2,
        },
        {
            title: 'Ant Design Title 4',
            current: 1,
        },
    ];

    const items = [
        {
            title: 'Step 1',
            description: 'This is a Step 1.',
        },
        {
            title: 'Step 2',
            description: 'This is a Step 2.',
        },
        {
            title: 'Step 3',
            description: 'This is a Step 3.',
        },
    ];
    return (<>


        <Descriptions title="Lịch tham dự" bordered>
            <Descriptions.Item>
                <List
                    itemLayout="vertical"
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                            <Steps
                                style={{
                                    marginTop: 8,
                                }}
                                type="navigation"
                                current={item.current}
                                status={item.status}
                                items={items}
                            />
                        </List.Item>
                    )}
                />
            </Descriptions.Item>

        </Descriptions>


    </>)
}
export default Index;
