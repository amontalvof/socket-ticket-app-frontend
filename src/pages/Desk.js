import React, { useState, useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Row, Col, Typography, Button, Divider } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { SocketContext } from '../context/SocketContext';
import { useHideMenu } from '../hooks/useHideMenu';
import getStoredUser from '../helpers/getStoredUser';

const { Title, Text } = Typography;

export const Desk = () => {
    const [user] = useState(getStoredUser());
    const history = useHistory();
    useHideMenu(false);
    const { socket } = useContext(SocketContext);
    const [workingTicket, setWorkingTicket] = useState(null);

    const logout = () => {
        localStorage.clear();
        history.replace('/signin');
    };

    const nextTicket = () => {
        socket.emit('work-next-ticket', user, (ticket) => {
            setWorkingTicket(ticket);
        });
    };

    if (!user.agent || !user.desk) {
        return <Redirect to="/signin" />;
    }

    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>{user.agent}</Title>
                    <Text>You are working at the desk: </Text>
                    <Text type="success">{user.desk}</Text>
                </Col>
                <Col span={4} align="right">
                    <Button shape="round" type="danger" onClick={logout}>
                        <CloseCircleOutlined />
                        Logout
                    </Button>
                </Col>
            </Row>
            <Divider />
            {workingTicket && (
                <Row>
                    <Col>
                        <Text>
                            You are attending the customer with ticket number:{' '}
                        </Text>
                        <Text style={{ fontSize: 30 }} type="danger">
                            {workingTicket.number}
                        </Text>
                    </Col>
                </Row>
            )}
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
