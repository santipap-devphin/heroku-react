import React from 'react';
import {
  HomeOutlined, GlobalOutlined, CopyOutlined, FolderOpenOutlined, TeamOutlined, AppstoreFilled, WindowsOutlined
} from '@ant-design/icons';

export default [
  {
    id: '0',
    tag: 'NavTitle',
    name: 'Dashboards',
  },
  {
    id: '1',
    tag: 'NavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <WindowsOutlined className='mr-2' />,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    id: '2',
    tag: 'NavTitle',
    name: 'Actions',
    icon: <AppstoreFilled className='mr-2'  />
  },
  {
    id: '3',
    tag: 'NavItem',
    name: 'Content',
    to: '/content',
    icon: <CopyOutlined className='mr-2'  />
  },
  {
    id: '4',
    tag: 'NavItem',
    name: 'Domain',
    to: '/website',
    icon: <GlobalOutlined className='mr-2'  />
  },
  {
    id: '5',
    tag: 'NavItem',
    name: 'Groups',
    to: '/groups',
    icon: <FolderOpenOutlined className='mr-2'  />
  },
  {
    id: '6',
    tag: 'NavItem',
    name: 'Users',
    to: '/users',
    icon: <TeamOutlined className='mr-2'  />
    
  }
  
  // {
  //   id: '6',
  //   tag: 'NavItem',
  //   name: 'Domain Status',
  //   to: '/domain',
  // },
  // {
  //   id: '10',
  //   tag: 'NavDropdown',
  //   name: 'Members',
  //   to: '/member',
  //   children: [
  //     {
  //       id: '12',
  //       tag: 'NavItem',
  //       name: 'Members',
  //       to: '/member',
  //     },
  //     {
  //       id: '13',
  //       tag: 'NavItem',
  //       name: 'Create Member',
  //       to: '/member/create',
  //     },
  //   ],
  // },
  // {
  //   id: '7',
  //   tag: 'NavDivider',
  //   className: 'm-2'
  // }
];
