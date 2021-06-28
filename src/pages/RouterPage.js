import React from 'react';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
} from 'react-router-dom';
import { SignIn } from './SignIn';
import { InLine } from './InLine';
import { CreateTicket } from './CreateTicket';
import { Desk } from './Desk';

const { Sider, Content } = Layout;

export const RouterPage = () => {
    return (
        <Router>
            <Layout style={{ height: '100vh' }}>
                <Sider collapsedWidth="0" breakpoint="md">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                    >
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to="/signin">Sign In</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            <Link to="/inline">In Line</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            <Link to="/create">Create Ticket</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Route path="/signin" component={SignIn} />
                            <Route path="/inline" component={InLine} />
                            <Route path="/create" component={CreateTicket} />
                            <Route path="/desk" component={Desk} />
                            <Redirect to="/signin" />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    );
};
