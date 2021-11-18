import React, { Component, createRef } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Form, Input, Button, Table, Tag, Space } from 'antd';
import Swal from "sweetalert2";

import Layout from '../../containers/Layout';
import { Card } from '../../commons';
import { users } from '../../mock/data';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      loading: false,
    };
    this.formRef = createRef();
  }

  componentDidMount() {
    this.setState({ loading: true });
  }

  onFinish = (values) => {
    console.log(values);
  };
  
  onReset = () => {
    this.formRef.current.resetFields();
  };

  // onChangeOrder = (pagination, filters, sorter, extra) => {
  //   console.log('params', pagination, filters, sorter, extra);
  // }
  handlePaggination = (start, length) => {
    console.log('params', start, length);
    // const { status, user_id } = this.state;
    // this.onLoadTable(status, user_id, start, length);
    // this.setState((prevState) => ({
    //   ...prevState,
    //   start: start,
    //   length: length,
    // }));
  };

  // onShowSizeChange = (current, pageSize) =>  {
  //   console.log(current, pageSize);
  // }

  // onChange = page => {
  //   console.log(page);
  //   this.setState({
  //     current: page,
  //   });
  // };

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
    const { user } = this.state;
    const columns = [
      {
        title: 'No',
        dataIndex: 'id',
        sorter: (a, b) => a.age - b.age,
        sortDirections: ['descend'],
        defaultSortOrder: 'ascend',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.email.length - b.email.length,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        defaultSortOrder: 'descend',
        render: status => {
          let color = status === 'active' ? 'success' : 'volcano';
          return (
            <Tag color={color}>
              {status.toUpperCase()}
            </Tag>
          )
        },
        sorter: (a, b) => a.status.length - b.status.length,
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (text, record) => (
      <Space size="small">
        <Link
              to={`/users/${record.name}`}
          className="ant-btn"
        >
          Edit
        </Link>
        <Button type="primary" onClick={() => this.deleteContent(record.id)} danger>Delete</Button>
      </Space>
        ),
      },
    ];

    return (
      <Layout
        hasBtn
        btnTitle="Add"
        btnOnClick={() => this.props.history.push('/users/add')}
      >
        <div className="boards-list">
          {/* layout */}
          <Card>
            <div className="table-responsive">
              <Table
                rowKey={record => record.id}
                columns={columns}
                dataSource={users}
                onChange={this.handlePaggination}
                pagination={{
                  defaultPageSize: 5,
                  showSizeChanger: users.length <= 5 ? false : true,
                  showQuickJumper: true,
                  // total: total,
                  defaultCurrent: 1,
                  onChange: (page, length) => {
                    console.log(page);
                    this.handlePaggination((page - 1) * length, length, "", page, length);
                  },
                  // showTotal: (total) => `Total ${total} items`,
                  pageSizeOptions: ["10", "20", "30"],
                  onShowSizeChange: (current, pageSize) => {
                    this.handlePaggination(0 * pageSize, pageSize, "", 1, pageSize);
                  }
                }}
              />
            </div>
          </Card>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Users);