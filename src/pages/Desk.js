import React from 'react';
import { Row, Col, Typography, Button, Divider } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export const Desk = () => {
    const logout = (params) => {
        console.log('logout');
    };

    const nextTicket = (params) => {
        console.log('nextTicket');
    };

    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>Andy</Title>
                    <Text>You are working at the desk: </Text>
                    <Text type="success">5</Text>
                </Col>
                <Col span={4} align="right">
                    <Button shape="round" type="danger" onClick={logout}>
                        <CloseCircleOutlined />
                        Logout
                    </Button>
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col>
                    <Text>
                        You are attending the customer with ticket number:{' '}
                    </Text>
                    <Text style={{ fontSize: 30 }} type="danger">
                        55
                    </Text>
                </Col>
            </Row>
            <Row>
                <Col offset={18} span={6} align="right">
                    <Button onClick={nextTicket} shape="round" type="primary">
                        <RightOutlined />
                        Next
                    </Button>
                </Col>
            </Row>
        </>
    );
};
