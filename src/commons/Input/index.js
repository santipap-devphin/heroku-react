import React from 'react';

const Input = (props) => {
  return <input {...props} />;
};
const CustomizeInput = ({ value = '', ...props }) => {
  console.log('props', props);
  return (
  <div style={{ padding: 10 }}>
    <Input style={{ outline: 'none' }} value={value} {...props} />
  </div>
)};
export default CustomizeInput;