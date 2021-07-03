import React, { useContext, useState } from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;

export const CreateTicket = () => {
    useHideMenu(true);
    const { socket } = useContext(SocketContext);
    const [lastTicket, setLastTicket] = useState(null);

    const newTicket = () => {
        socket.emit('request-ticket', null, (ticket) => {
            setLastTicket(ticket);
        });
    };

    return (
        <>
            <Row>
                <Col span={14} offset={6} align="center">
                    <Title level={3}>
                        Press the button to generate a new ticket
                    </Title>
                    <Button
                        onClick={newTicket}
                        shape="round"
                        type="primary"
                        size="large"
                    >
                        <DownloadOutlined />
                        New Ticket
                    </Button>
                </Col>
            </Row>
            {lastTicket && (
                <Row style={{ marginTop: 100 }}>
                    <Col span={14} offset={6} align="center">
                        <Text level={2}>Your number</Text>
                        <br />
                        <Text type="success" style={{ fontSize: 55 }}>
                            {lastTicket.number}
                        </Text>
                    </Col>
                </Row>
            )}
        </>
    );
};
