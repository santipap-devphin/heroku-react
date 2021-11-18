import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Table, Button, Menu, Dropdown, Tag } from 'antd';
import Moment from 'moment';
import {
  FileTextOutlined,
  DownOutlined,
  GlobalOutlined,
  TeamOutlined,
  UserDeleteOutlined,
  UserOutlined,
  GoldOutlined,
  SnippetsOutlined
} from '@ant-design/icons';

import { contentsrecent } from '../../mock/data';

function Recent() {
	
	const menu = (record) => {
		return (
		  <Menu className="menu-dropdown-table">
			<Menu.Item key="0">
			  <Button onClick={() => this.props.history.push(`/content/${record.id}`)}>
				Edit
			  </Button>
			</Menu.Item>
			<Menu.Item key="1">
			  <Button onClick={() => this.deleteContent(record.id)}>
				Delete
			  </Button>
			</Menu.Item>
			<Menu.Item key="2">
			  <Button onClick={() => console.log('View', record.id)}>View</Button>
			</Menu.Item>
			<Menu.Item key="3">
			  <Button onClick={() => console.log('Repost', record.id)}>Repost</Button>
			</Menu.Item>
			<Menu.Item key="4">
			  <Button onClick={() => console.log('Duplicate', record.id)}>Duplicate</Button>
			</Menu.Item>
		  </Menu>
		)
	  }
	const columns = [
		{
		  title: 'No',
		  dataIndex: 'id',
		  key: 'id',
		  sorter: (a, b) => a.id - b.id,
		  sortDirections: ['descend'],
		  defaultSortOrder: 'descend',
		},
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
		},
		{
			title: 'Url',
			dataIndex: 'website',
			// defaultSortOrder: 'descend',
			// sorter: (a, b) => a.website.length - b.website.length,
			render: (website) => (
			  <div>
				{ /* <a href="#" className="lowercase" dangerouslySetInnerHTML={{ __html: website }} />  */} 
				<a href="#" className="lowercase" dangerouslySetInnerHTML={{ __html: website }} />
			  </div>
			),
		},
		{
		  title: 'Group',
		  dataIndex: 'group',
		},
		{
			title: 'Status',
			dataIndex: 'status',
			render: status => {
			  let color = status === 'success' ? 'success' : 'volcano';
			  return (
				<Tag color={color}>
				  {status.toUpperCase()}
				</Tag>
			  )
			},
		},
		{
			title: 'Date',
			dataIndex: 'dateadd',
			// defaultSortOrder: 'descend',
			// sorter: (a, b) => a.status.length - b.status.length,
			render: dateadd => {
			  let Dd = Moment(dateadd).format('LL');
			  return (
				<span>
				  {Dd}
				</span>
			  )
			},
		},
		{
			title: 'Action',
			dataIndex: '',
			key: 'x',
			render: (text, record) => (
			  <Dropdown overlay={menu(record)} trigger={['click']}>
				<div
				  className="ant-dropdown-link d-flex align-items-center cursor-pointer"
				>
				  Actions <DownOutlined className="ml-2" />
				</div>
			  </Dropdown>
			),
		},
	];
	return (
		<div id="recent-post">
	    	<h2 className="recent-post-title">Last Post</h2>
			<Table 
				pagination={{
					hideOnSinglePage: true,
					position: "bottomCenter",
					showSizeChanger: true,
					pageSizeOptions: ["10", "20", "50", "100", "200"]
				  }}
				rowKey={record => record.id}
				columns={columns} 
				dataSource={contentsrecent} 
				
			/>
			
			<p className="mt-3"><Button href="/content" type="primary" shape="round"  size={20} > Load More ... (เพิ่มที่ละ  5) </Button></p>
		</div>
	);
    
}
	
	
export default Recent;
