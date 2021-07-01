import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, Typography, Divider } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { useHistory, Redirect } from 'react-router-dom';
import { useHideMenu } from '../hooks/useHideMenu';
import getStoredUser from '../helpers/getStoredUser';

const { Title, Text } = Typography;

export const SignIn = () => {
    const [user] = useState(getStoredUser());
    const history = useHistory();
    useHideMenu(false);

    const onFinish = ({ agent, desk }) => {
        localStorage.setItem('agent', agent);
        localStorage.setItem('desk', desk);
        history.push('/desk');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if (user.agent && user.desk) {
        return <Redirect to="/desk" />;
    }

    return (
        <>
            <Title level={2}>Sign In</Title>
            <Text>Enter your name and desk number</Text>
            <Divider />
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 14,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Agent name"
                    name="agent"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your agent name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Desk"
                    name="desk"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your desk number!',
                        },
                    ]}
                >
                    <InputNumber min={1} max={99} />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 14,
                    }}
                >
                    <Button type="primary" htmlType="submit" shape="round">
                        <LoginOutlined />
                        Sign in
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
