import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MultiSelect from '@kenshooui/react-multi-select';

const SelectMultiple = (props) => {
  const { toDos, dataBase, onSelected, onChange } = props
  const [selected, setSelected] = useState(dataBase);

  useEffect(() => {
    onSelected(selected);
  }, [selected, onSelected]);
  // https://codesandbox.io/s/2wrec?file=/src/index.js:12-37
  // https://codesandbox.io/s/glxcw?file=/src/index.js
  // https://codesandbox.io/s/rsjks?file=/src/index.js
  // https://awesomeopensource.com/project/kenshoo/react-multi-select
  return (
    <MultiSelect
      items={toDos}
      selectedItems={dataBase.length > 0 ? dataBase : selected}
      onChange={onChange}
      showSelectedItems
    />
  );
};


SelectMultiple.propTypes = {
  dataBase: PropTypes.array,
  toDos: PropTypes.array,
};


export default SelectMultiple;
