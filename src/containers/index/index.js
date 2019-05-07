import React, { Component } from 'react';
import './index.css';
import { Button } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '@containers/home/index';
import Login from '@containers/login/index';

class Index extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        )
    }
}


export default Index;