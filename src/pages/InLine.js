import React from 'react';
import { Row, Col, Typography, List, Card, Tag, Divider } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

const data = [
    {
        ticketNo: 33,
        desk: 3,
        agent: 'Fernando Herrera',
    },
    {
        ticketNo: 34,
        desk: 4,
        agent: 'Melissa Flores',
    },
    {
        ticketNo: 35,
        desk: 5,
        agent: 'Carlos Castro',
    },
    {
        ticketNo: 36,
        desk: 3,
        agent: 'Fernando Herrera',
    },
    {
        ticketNo: 37,
        desk: 3,
        agent: 'Fernando Herrera',
    },
    {
        ticketNo: 38,
        desk: 2,
        agent: 'Melissa Flores',
    },
    {
        ticketNo: 39,
        desk: 5,
        agent: 'Carlos Castro',
    },
];

export const InLine = () => {
    useHideMenu(true);
    return (
        <>
            <Title level={1}>Serving client</Title>
            <Row>
                <Col span={12}>
                    <List
                        dataSource={data.slice(0, 3)}
                        renderItem={(item) => (
                            <List.Item>
                                <Card
                                    style={{ width: 300, marginTop: 16 }}
                                    actions={[
                                        <Tag color="volcano">{item.agent}</Tag>,
                                        <Tag color="magenta">
                                            Desk: {item.desk}
                                        </Tag>,
                                    ]}
                                >
                                    <Title>No. {item.ticketNo}</Title>
                                </Card>
                            </List.Item>
                        )}
                    />
                </Col>
                <Col span={12}>
                    <Divider>History</Divider>
                    <List
                        dataSource={data.slice(3)}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    title={`Ticket No. ${item.ticketNo}`}
                                    description={
                                        <>
                                            <Text tyle="secondary">
                                                In desk:{' '}
                                            </Text>
                                            <Tag
                                                color="magenta"
                                                style={{ marginRight: 30 }}
                                            >
                                                {item.desk}
                                            </Tag>
                                            <Text tyle="secondary">
                                                Agent:{' '}
                                            </Text>
                                            <Tag color="volcano">
                                                {item.agent}
                                            </Tag>
                                        </>
                                    }
                                />
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </>
    );
};
