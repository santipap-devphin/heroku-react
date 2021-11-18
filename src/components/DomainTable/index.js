import { Link, withRouter } from 'react-router-dom';
import { Tooltip, Button, List, Tag } from 'antd';

import { DomainTableStyle } from './style';

const DomainTable = (props) => {
  const {
    user,
    total,
    onChangePagination,
    onDelete,
    start,
  } = props;
  
  return (
    <DomainTableStyle>
      {props.loading === false && (
        <List
          itemLayout="vertical"
          size="large"
          pagination={
            user && total > 5
              ? {
                onChange: onChangePagination,
                pageSize: 5,
                total,
                defaultCurrent: start / 5 + 1,
              }
              : false
          }
          dataSource={user}
          renderItem={(item) => {
            let color = item.status === 'active' ? 'geekblue' : 'volcano';
            return (
              <li
                className="group_member js-member member px-md-3 py-2"
                key={item.id}
              >
                <span className="list-item-name mb-2 m-md-0">
                  <div className="user-info w-100 ml-2">
                    <span className="mr-1">
                      <Link
                        className="member js-user-link mr-1"
                        to={{
                          pathname: `/member`,
                        }}
                      >
                        {`${item.website}`}
                      </Link>
                    </span>
                    <div className="mx-n1 d-inline-flex flex-wrap" />
                    <div className="cgray">
                      {item.group}
                      <span className="gl-display-none js-expires-in">
                        <Tooltip title={item.created_at}>
                          <span className="js-timeago">{item.given_access}</span>
                        </Tooltip>
                      </span>
                    </div>
                  </div>
                </span>
                <div className="controls member-controls align-items-center">
                  <Tag color={color}>
                    {item.status.toUpperCase()}
                  </Tag>
                  <Button
                    type="primary"
                    className="btn btn-member btn-svg btn-danger align-self-center mb-2 mb-md-0 ml-sm-2"
                    size="large"
                    ghost
                    onClick={() => {
                      props.history.push({
                        pathname: `/member`,
                      });
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    data-confirm='Are you sure you want to leave the "twinsyn / MANA / mana-operation / mana-operation-backoffice" project?'
                    className="btn btn-member btn-danger align-self-center ml-sm-2"
                    size="large"
                    type="primary"
                    danger
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </Button>
                </div>
              </li>)
          }}
        />
      )}
    </DomainTableStyle>
  );
};

export default withRouter(DomainTable);
