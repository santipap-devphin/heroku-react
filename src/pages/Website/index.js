import React, { Component, createRef } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Form, Input, Button, Table, Tag, Space } from 'antd';
import Swal from "sweetalert2";

import Layout from '../../containers/Layout';
import { Card } from '../../commons';
import { users } from '../../mock/data';

class WebsiteComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.formRef = createRef();
  }

  componentDidMount() { }

  onFinish = (values) => {
    console.log(values);
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
        sortDirections: ['ascend'],
        defaultSortOrder: 'ascend'
      },
      {
        title: 'Status',
        dataIndex: 'domainStatus',
        render: ds => {
          let dsn = 'ds-status ds-'+ds;
          return (
            <div className={dsn}>
              <span /> {ds}
            </div>
          )
        }
      },
      {
        title: 'Website',
        dataIndex: 'website',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.website.length - b.website.length,
        render: dm => {
          let dmlink = '/domainitem/'+dm;
          return (
            <div>
              <Link
                to={dmlink}
                className=""
              >
              {dm}
              </Link>
            </div>
          )
        }
      },
      {
        title: 'Group',
        dataIndex: 'group',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.group.length - b.group.length,
     
      
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (text, record) => (
          <Space size="small">
            <Link
              to={`/website/${record.website}`}
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
        btnTitle="+ Add Domain"
        btnOnClick={() => this.props.history.push('/website/add')}
      >
        <div className="boards-list">
          {/* layout */}
          <Card>
            <div className="table-responsive">
              <Table
                rowKey={record => record.id}
                columns={columns}
                rowClassName={record => record.domainStatus}
                dataSource={users}
                onChange={this.onChange}
                pagination={{
                  hideOnSinglePage: true,
                  defaultPageSize: 10,
                  showSizeChanger: users.length <= 5 ? false : true,
                }}
              />
            </div>
          </Card>
        </div>
      </Layout>
    );
  }
}

export default withRouter(WebsiteComponent);