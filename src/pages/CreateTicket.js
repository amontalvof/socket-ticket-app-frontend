import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

export const CreateTicket = () => {
    useHideMenu(true);

    const newTicket = (params) => {
        console.log('newTicket');
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
            <Row style={{ marginTop: 100 }}>
                <Col span={14} offset={6} align="center">
                    <Text level={2}>Your number</Text>
                    <br />
                    <Text type="success" style={{ fontSize: 55 }}>
                        55
                    </Text>
                </Col>
            </Row>
        </>
    );
};
