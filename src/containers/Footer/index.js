import React from 'react';
import PropTypes from 'prop-types';

import { FooterStyle } from './style'

const Footer = () => {
  return (
    <FooterStyle className="px-4 mt-4">
      <div className="row justify-content-between align-items-center">
        <div className="col">
          <p className="font-size-sm mb-0">
            © <span className="d-none d-sm-inline-block">2020 Twinsynergy Co. Ltd.,</span>
          </p>
        </div>
        <div className="col-auto">
          <div className="d-flex justify-content-end py-2">
            <ul className="list-inline list-separator mb-0">
              <li className="list-inline-item">
                <a className="list-separator-link" href="/">FAQ</a>
              </li>
              <li className="list-inline-item">
                <a className="list-separator-link" href="/">License</a>
              </li>
              <li className="list-inline-item">
                <div className="hs-unfold">
                  <a className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="/">
                    <i className="tio-command-key"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};


Footer.propTypes = {

};


export default Footer;
