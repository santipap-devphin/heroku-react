import React from 'react';
import PropTypes from 'prop-types';
import { CardStyle } from './style';

const CardComponent = (props) => {
  const { children, className } = props
  return (
    <CardStyle className={className}>
      {children}
    </CardStyle>
  );
};

CardComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default CardComponent;
