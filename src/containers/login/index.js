import React, { Component } from 'react';
import { Modal, Input } from 'antd';
import './index.scss';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            pw: ""
        }
    }
    // 利用taret的类名来区分
    handleCancle = (e) => {
        
    }

    handleOk = () => {
       
    }
    render() {
        return (
            <Modal
                centered
                title="登入"
                closable={true}
                visible={true}
                okText="登录"
                cancelText="注册新账号"
                onCancel={this.handleCancle}
                onOk={this.handleOk}
            >   
                <div className="modal-content">
                    <div>
                        <p>用户名</p>
                        <Input value={this.state.name} onChange={(e) => this.handleChange("name", e)}/>
                    </div>
                    <div>
                        <p>密码</p>
                        <Input type="password" value={this.state.pw} onChange={(e) => this.handleChange("pw", e)}/>
                    </div>
                    {/* <div className="error">
                        {
                            (code === 4 )  && (<p>{message}</p>)
                        }
                    </div>
                    { 
                        (code === 3) && (<Redirect to="/"></Redirect>) //注册完成后跳转到登录页面 
                    } */}
                </div>
            </Modal>
        )
    }
}

export default Index;