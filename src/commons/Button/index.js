import React from 'react';
import PropTypes from 'prop-types';


const CustomButton = (props) => {
  const { className, children } = props
  return (
    <div className={className}>
      {children}
    </div>
  );
};


CustomButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};


export default CustomButton;
