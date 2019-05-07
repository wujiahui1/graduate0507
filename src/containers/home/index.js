import React, { Component } from 'react';
import { Layout} from 'antd';

import './index.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const { Header, Content} = Layout;

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.match);
        return (
            <Router>
                <Layout className="layout">
                    <Header className="layout-header">
                        <div className="welcome">
                            你好
                        </div>
                    </Header>
                    <Content className="content">
                        <div className="content-main">
                            你好
                        </div>
                    </Content>
                </Layout>
            </Router>
        )
    }
}

export default Index;