import React, { Component } from 'react';
import './index.css';
import { Button } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '@containers/home/index';

class Index extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        )
    }
}


export default Index;