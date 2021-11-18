import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../../commons';

const CardBoard = (props) => {
  const { wrapperClass, title, icon, value, extra } = props;
  return (
    <Card className={wrapperClass}>
      <div className="card-body p-1">
        <div className="row">
          <div className="mt-0 col">
            <h5 className="card-title text-white">{title}</h5>
          </div>
          <div className="col-auto col">
            <div className="avatar">
              <div className="avatar-title rounded-circle bg-primary-dark">
                {icon}
              </div>
            </div>
          </div>
        </div>
        <p className="display-5 h1 mt-1 mb-3">{value}</p>
        {extra}
      </div>
    </Card>
  );
};

CardBoard.propTypes = {
  wrapperClass: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.element,
  value: PropTypes.string,
  extra: PropTypes.element,
};


export default CardBoard;
