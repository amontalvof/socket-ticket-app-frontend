import React, { useContext, useEffect, useState } from 'react';
import { Row, Col, Typography, List, Card, Tag, Divider } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;

export const InLine = () => {
    useHideMenu(true);
    const { socket } = useContext(SocketContext);
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        socket.on('assigned-ticket', (assigned) => {
            setTickets(assigned);
        });
        return () => {
            socket.off('assigned-ticket');
        };
    }, [socket]);

    return (
        <>
            <Title level={1}>Serving client</Title>
            <Row>
                <Col span={12}>
                    <List
                        dataSource={tickets.slice(0, 3)}
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
                                    <Title>No. {item.number}</Title>
                                </Card>
                            </List.Item>
                        )}
                    />
                </Col>
                <Col span={12}>
                    <Divider>History</Divider>
                    <List
                        dataSource={tickets.slice(3)}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    title={`Ticket No. ${item.number}`}
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
