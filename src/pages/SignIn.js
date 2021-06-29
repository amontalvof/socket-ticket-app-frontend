import React from 'react';
import { Form, Input, InputNumber, Button, Typography, Divider } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const { Title, Text } = Typography;

export const SignIn = () => {
    const history = useHistory();
    const onFinish = (values) => {
        console.log('Success:', values);
        history.push('/desk');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
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
