import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import './index.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddPeople from '@containers/addPeople/index';
import FindPeople from '@containers/findPeople/index';
import Login from '@containers/login/index';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        console.log(this.props.match);
        return (
            <Router>
                <Layout className="layout">
                    <Header className="layout-header">
                        <div>
                            家电维修预约管理后台
                        </div>
                        <div className="welcome">
                            你好
                        </div>
                    </Header>
                    <Content className="content">
                        <Layout style={{ minHeight: '100vh' }}>
                            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                                <div className="logo" />
                                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                    <SubMenu
                                        key="sub1"
                                        title={
                                            <span>
                                                <Icon type="user" />
                                                <span>账号管理</span>
                                            </span>
                                        }
                                    >
                                        <Menu.Item key="3">个人信息</Menu.Item>
                                        <Menu.Item key="4">信息修改</Menu.Item>
                                        <Menu.Item key="5">注销账号</Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub2"
                                        title={
                                            <span>
                                                <Icon type="team" />
                                                <span>员工管理</span>
                                            </span>
                                        }
                                    >
                                        <Menu.Item key="6">所有员工</Menu.Item>
                                        <Menu.Item key="7">员工查找</Menu.Item>
                                        <Menu.Item key="8">员工添加</Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub3"
                                        title={
                                            <span>
                                                <Icon type="team" />
                                                <span>订单管理</span>
                                            </span>
                                        }
                                    >
                                        <Menu.Item key="6">所有订单</Menu.Item>
                                        <Menu.Item key="7">我的订单</Menu.Item>
                                        <Menu.Item key="8">分单池</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Layout>
                                <Content style={{ margin: '0 16px' }}>
                                    <Switch>
                                        <Route exact path="/" component={AddPeople} />
                                        <Route  path="/findPeople" component={FindPeople} />
                                        <Route path="/login" component={Login} />
                                    </Switch>
                                </Content>
                            </Layout>
                        </Layout>
                    </Content>
                </Layout>
            </Router>
        )
    }
}

export default Index;