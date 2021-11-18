import React, { useState } from 'react';

import Layout from '../../containers/Layout';
import { Card } from '../../commons';
import { DomainTable, DomainHeadFilter } from '../../components';
import { group, users } from '../../mock/data';

const DomainStatus = () => {
  const [search, setSearch] = useState('');
  const [start, setStart] = useState(0);
  const [total] = useState(users.length);
  const [order, setOrder] = useState('');
  const [groups, setGroups] = useState(group);
  const [currentGroup, setCurrentGroup] = useState('All');
  const [data, setData] = useState(users);

  // useEffect(() => {
  //   groups.splice(0, 0, { "id": "0", "name": "All" });
  //   groups.join()
  //   const req = [...new Map(users.map(item => [item.group, item])).values()]
  // }, []);

  const setGroupData = (val) => {
    if (val !== 'All') {
      const post2 = users.filter(post => post.group === val);
      setCurrentGroup(val);
      setData(post2);
    } else {
      setCurrentGroup('All');
      setData(users);
    }
  }

  const handleSearch = (event) => {
    setStart(0);
    setSearch(event.target.value);
    console.log('handleSearch', event.target.value);
  };

  const handleSelect = (value) => {
    console.log('handleSelect', value);
    setOrder(value);
  };

  const onChangePagination = (page, length) => {
    console.log('page, length', page, length)
    setStart((page - 1) * length);
  };

  const onDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Confirmed');
      } else {
        console.log('Confirmed');
      }
    });
  };

  return (
    <Layout>
      <Card>
        <DomainHeadFilter
          hasFilter
          group={groups}
          currentGroup={currentGroup}
          onFilterGroup={setGroupData}
          opt={[
            { id: '1', name: 'Sort by name, a-z' },
            { id: '2', name: 'Sort by name, z-a' },
          ]}
          onSearch={handleSearch}
          onSelect={handleSelect}
        />
        <DomainTable
          loading={false}
          user={data}
          total={total}
          start={start}
          onDelete={onDelete}
          onChangePagination={onChangePagination}
        />
      </Card>
    </Layout>
  );
}

export default DomainStatus;
