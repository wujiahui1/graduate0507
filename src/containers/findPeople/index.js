import React, { Component } from 'react';
import './index.scss';
import { Table, Divider, Tag } from 'antd';
import { Input, Button } from 'antd';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    },
    {
      title: 'Cash Assets',
      className: 'column-money',
      dataIndex: 'money',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      money: '￥300,000.00',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      money: '￥1,256,000.00',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  

class Index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="find-people">
                <div className="find-search">
                    <Input />
                    <Button>查找</Button>
                </div>
                <div className="order-job">
                    <Button type="primary">职位</Button>
                    <Button >维修员</Button>
                    <Button >业务员</Button>
                    <Button >管理员</Button>
                    <Button>全部</Button>
                </div>
                <div className="order-job">
                    <Button type="primary">级别</Button>
                    <Button >初级</Button>
                    <Button >中级</Button>
                    <Button >高级</Button>
                    <Button>全部</Button>
                </div>
                <div>
                    <Table columns={columns} dataSource={data} bordered/>
                </div>
            </div>
        )
    }
}

export default Index;