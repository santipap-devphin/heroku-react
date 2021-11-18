import React from 'react';

const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const Groups = React.lazy(() => import('./pages/Groups'));
const Website = React.lazy(() => import('./pages/Website'));
const AddWebsite = React.lazy(() => import('./pages/AddWebsite'));
const Content = React.lazy(() => import('./pages/Content'));
const AddContent = React.lazy(() => import('./pages/AddContent'));
const Users = React.lazy(() => import('./pages/Users'));
const AddUsers = React.lazy(() => import('./pages/AddUsers'));
const ChangePassword = React.lazy(() => import('./pages/ChangePassword'));
const EditContent = React.lazy(() => import('./pages/EditContent'));
const EditWebsite = React.lazy(() => import('./pages/EditWebsite'));
const EditUsers = React.lazy(() => import('./pages/EditUsers'));
const DomainStatus = React.lazy(() => import('./pages/DomainStatus'));
const DomainItem = React.lazy(() => import('./pages/DomainItem'));
// const MemberViewTicket = React.lazy(() => import('./pages/MemberViewTicket'));
// const ActivityTicket = React.lazy(() => import('./pages/ActivityTicket'));
// const ActivityFraud = React.lazy(() => import('./pages/ActivityFraud'));
// const ActivityFrozen = React.lazy(() => import('./pages/ActivityFrozen'));
// const ActivityKYC = React.lazy(() => import('./pages/ActivityKYC'));
// const ActivityBusiness = React.lazy(() => import('./pages/ActivityBusiness'));
// const ActivityCorporate = React.lazy(() => import('./pages/ActivityCorporate'));
// const PermissionManage = React.lazy(() => import('./pages/Permission'));
// const PermissionCreate = React.lazy(() => import('./pages/PermissionCreate'));
// const PermissionEdit = React.lazy(() => import('./pages/PermissionEdit'));
// const PermissionView = React.lazy(() => import('./pages/PermissionView'));
// const Customer = React.lazy(() => import('./pages/Customer'));
// const MemberChangePassword = React.lazy(() =>
//   import('./pages/MemberChangePass'),
// );

const NoMatch = React.lazy(() => import('./pages/NoMatch'));

const routes = [
  { path: '/', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/groups', exact: true, name: 'Groups', component: Groups },
  { path: '/website', exact: true, name: 'Domains', component: Website },
  { path: '/website/add', exact: true, name: 'Add Website', component: AddWebsite },
  { path: '/content', exact: true, name: 'Content', component: Content },
  { path: '/content/add', exact: true, name: 'Add Content', component: AddContent },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/add', exact: true, name: 'Add Users', component: AddUsers },
  { path: '/change-password', exact: true, name: 'Change Password', component: ChangePassword },
  { path: '/content/:slug', exact: true, name: 'Edit Content', component: EditContent },
  { path: '/website/:slug', exact: true, name: 'Edit Website', component: EditWebsite },
  { path: '/users/:slug', exact: true, name: 'Edit Users', component: EditUsers },
  { path: '/domain', exact: true, name: 'Domain Status', component: DomainStatus },
  { path: '/domainitem/:slug', exact: true, name: 'Domain Item', component: DomainItem },
  // { path: '/', exact: true, name: 'Dashboard', component: NoMatch },
  // {
  //   path: '/frozen-account',
  //   name: 'Frozen Account',
  //   component: Frozen,
  //   exact: true,
  // },
  // { path: '/kyc', name: 'KYC', component: KYC, exact: true },
  // { path: '/customer', name: 'Customer', component: Customer, exact: true },
  // {
  //   path: '/business-account',
  //   name: 'Business Account',
  //   component: Business,
  //   exact: true,
  // },
  // {
  //   path: '/corporate-account',
  //   name: 'Corporate Account',
  //   component: Corporate,
  //   exact: true,
  // },
  // { path: '/member', name: 'Members', component: Members, exact: true },
  // {
  //   path: '/member/create',
  //   name: 'Create Member',
  //   component: CreateMember,
  //   exact: true,
  // },
  // {
  //   path: '/member/:slug',
  //   name: 'Member Detail',
  //   component: MemberView,
  //   exact: true,
  // },
  // {
  //   path: '/member/:slug/activity',
  //   name: 'Member Activity',
  //   component: MemberViewActivity,
  //   exact: true,
  // },
  // {
  //   path: '/member/:slug/ticket',
  //   name: 'Member Ticket',
  //   component: MemberViewTicket,
  //   exact: true,
  // },
  // {
  //   path: '/member/:slug/edit',
  //   name: 'Edit Member',
  //   component: EditMember,
  //   exact: true,
  // },
  // {
  //   path: '/member/:slug/change-passwoard',
  //   name: 'Member Change Password',
  //   component: MemberChangePassword,
  //   exact: true,
  // },
  // { path: '/activity', name: 'Activity', component: Activity, exact: true },
  // {
  //   path: '/activity/ticket',
  //   name: 'Activity Ticket',
  //   component: ActivityTicket,
  //   exact: true,
  // },
  // {
  //   path: '/activity/fraund',
  //   name: 'Activity Fraud',
  //   component: ActivityFraud,
  //   exact: true,
  // },
  // {
  //   path: '/activity/frozen',
  //   name: 'Activity Frozen',
  //   component: ActivityFrozen,
  //   exact: true,
  // },
  // {
  //   path: '/activity/kyc',
  //   name: 'Activity KYC',
  //   component: ActivityKYC,
  //   exact: true,
  // },
  // {
  //   path: '/activity/bussiness',
  //   name: 'Activity Business',
  //   component: ActivityBusiness,
  //   exact: true,
  // },
  // {
  //   path: '/activity/corporate',
  //   name: 'Activity Corporate',
  //   component: ActivityCorporate,
  //   exact: true,
  // },
  // {
  //   path: '/permission',
  //   name: 'Permission',
  //   component: PermissionManage,
  //   exact: true,
  // },
  // {
  //   path: '/permission/create',
  //   name: 'Permission Create',
  //   component: PermissionCreate,
  //   exact: true,
  // },
  // {
  //   path: '/permission/:slug/edit',
  //   name: 'Permission Edit',
  //   component: PermissionEdit,
  //   exact: true,
  // },
  // {
  //   path: '/permission/:slug',
  //   name: 'Permission Detail',
  //   component: PermissionView,
  //   exact: true,
  // },
  // { path: '/404', name: 'No Match', component: NoMatch, exact: true },
];

export default routes;
