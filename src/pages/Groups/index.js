import React, { Component, createRef } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Form, Input, Button, Table, Space } from 'antd';
import Swal from "sweetalert2";

import Layout from '../../containers/Layout';
import { Card } from '../../commons';
import { group } from '../../mock/data';

class GroupsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.formRef = createRef();
  }

  componentDidMount() {}

  onFinish = (values) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be add this group!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Add Group", values);
      }
    });
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  }

  deleteContent = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Deleted", id)
      }
    });
  };

  render() {
    const columns = [
      {
        title: 'No',
        dataIndex: 'id',
        sorter: (a, b) => a.id - b.id,
        sortDirections: ['descend'],
        defaultSortOrder: 'ascend',
      },
      {
        title: 'Group',
        dataIndex: 'name',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: 'Domains',
        render: (text) => (
          <div>
            {Math.floor(Math.random() * 100) + 1 }
          </div>
        ),
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (text, record) => (
          <Space size="small">
            <Button
              onClick={() => console.log(record.id)}
              className="ant-btn"
            >
              Edit
            </Button>
            <Button type="primary" onClick={() => this.deleteContent(record.id)} danger>Delete</Button>
          </Space>
        ),
      },
    ];
    return (
      <Layout>
        <div className="boards-list">
          {/* layout */}
          <Card className="col-12 col-xl-12 mb-3">
            <Form
              form={this.props.form}
              ref={this.formRef}
              name="control-hooks"
              onFinish={this.onFinish}
            >
              <Form.Item
                name="name"
                label=""
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Group Name" />
              </Form.Item>
              <Form.Item className="text-right">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button className="ml-1" htmlType="button" onClick={this.onReset}>
                  Reset
                </Button>
              </Form.Item>
            </Form>
          </Card>
          <Card>
            <div className="table-responsive">
              <Table
                rowKey={record => record.id}
                columns={columns}
                dataSource={group}
                onChange={this.onChange}
                pagination={{
                  hideOnSinglePage: true,
                  defaultPageSize: 5,
                  showSizeChanger: group.length <= 5 ? false : true,
                }}
              />
            </div>
          </Card>
        </div>
      </Layout>
    );
  }
}

export default withRouter(GroupsComponent);