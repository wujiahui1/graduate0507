import React, { Component } from 'react';
import './index.scss';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';
const { Option } = Select;
class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}  onSubmit={this.handleSubmit}>
            <Form.Item label="姓名">
                {getFieldDecorator('Name', {
                    rules: [{ required: true, message: 'Please input your note!' }],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="身份证">
                {getFieldDecorator('IdCard', {
                    rules: [{ required: true, message: 'Please input your idCard!' }],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="电话">
                {getFieldDecorator('PhoneNumber', {
                    rules: [{ required: true, message: 'Please input your phoneNumber!' }],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="民族">
                {getFieldDecorator('mz', {
                    rules: [{ required: true, message: 'Please select your 民族!' }],
                })(
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={this.handleSelectChange}
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                    </Select>,
                )}
            </Form.Item>
            <Form.Item label="性别">
                {getFieldDecorator('gender', {
                    rules: [{ required: true, message: 'Please select your gender!' }],
                })(
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={this.handleSelectChange}
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                    </Select>,
                )}
            </Form.Item>
            <Form.Item label="婚否">
                {getFieldDecorator('isMarry', {
                    rules: [{ required: true, message: 'Please select your 婚否!' }],
                })(
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={this.handleSelectChange}
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                    </Select>,
                )}
            </Form.Item>
            <Form.Item label="邮箱">
                {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your phoneNumber!' }],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="毕业院校">
                {getFieldDecorator('school', {
                    rules: [{ required: true, message: 'Please input your phoneNumber!' }],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="紧急电话">
                {getFieldDecorator('emPhoneNumber', {
                    rules: [{ required: true, message: 'Please input your emPhoneNumber!' }],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="个人经历">
                {getFieldDecorator('experience', {
                    rules: [{ required: true, message: 'Please input your emPhoneNumber!' }],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="家庭住址">
                {getFieldDecorator('address', {
                    rules: [{ required: true, message: 'Please input your emPhoneNumber!' }],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="员工职位">
                {getFieldDecorator('company', {
                    rules: [{ required: true, message: 'Please select your 员工职位!' }],
                })(
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={this.handleSelectChange}
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                    </Select>,
                )}
            </Form.Item>
            <Form.Item label="职位级别">
                {getFieldDecorator('rank', {
                    rules: [{ required: true, message: 'Please select your 职位级别!' }],
                })(
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={this.handleSelectChange}
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                    </Select>,
                )}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
            </Form>
        
            )
    }
           
}

const WrappedIndex = Form.create({ name: 'coordinated' })(Index);
export default WrappedIndex;