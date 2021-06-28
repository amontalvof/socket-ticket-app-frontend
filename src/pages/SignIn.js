import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

export const SignIn = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
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
    );
};
