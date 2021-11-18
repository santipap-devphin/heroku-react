import React, { Fragment } from 'react';
import { Input, Select, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { DomainHeadFilterStyle } from './style'

const { Option } = Select;

const DomainHeadFilter = (props) => {
  const {
    group,
    currentGroup,
    onFilterGroup,
    opt,
    onSearch,
    onSelect,
    hasFilter = false,
  } = props;
  return (
    <DomainHeadFilterStyle className="row align-items-center mb-3 mb-xl-4 px-3">
      <div className="w-auto mb-3 mb-lg-2">
        {
          group && (
          <Fragment>
              <Button type="link" className={currentGroup === 'All' ? `active` : ''} onClick={() => onFilterGroup('All')}>
              All
            </Button>
            {
              group.map((item) => (
                <Button type="link" className={currentGroup === item.name ? `active` : ''} key={item.id} onClick={() => onFilterGroup(item.name)}>
                  {item.name}
                </Button>
              ))
            }
          </Fragment>
          )
        }
      </div>
      {
        hasFilter === true &&
        (
          <div className="ml-lg-auto order-3 order-md-2">
            <div
              className="user-search-form d-flex align-items-md-center flex-wrap flex-column flex-md-row"
              acceptCharset="UTF-8"
              method="get"
            >
              <div className="search-control-wrap position-relative px-md-3 d-flex align-items-center flex-column flex-md-row">
                <Input
                  className="search-control-input"
                  placeholder="input search text"
                  onChange={onSearch}
                  suffix={<SearchOutlined />}
                />
              </div>
              <div className="pl-0 pl-lg-3 d-flex align-items-md-center flex-column flex-md-row">
                <label
                  className="label-bold mr-2 mb-0 py-2 align-self-md-center"
                  htmlFor="sort_by"
                >
                  Sort by
                </label>
                <div
                  className="dropdown inline data-sort-dropdown"
                  data-testid="user-sort-dropdown"
                >
                  <Select
                    id="sort_by"
                    defaultValue="sort by a - z"
                    onChange={onSelect}
                  >
                    {opt &&
                      opt.map((item) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Option value={item.id} key={item.id}>
                          {item.name}
                        </Option>
                      ))}
                  </Select>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </DomainHeadFilterStyle>
  );
}

export default DomainHeadFilter;
