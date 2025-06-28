import React from 'react';
import Logo from '@/modules/common/resources/images/Logo';
import './resources/styles/whitelabelling-form-wrapper.styles.scss';
import { getSubpath } from '@/_helpers/routes';

const WhiteLabellingFormWrapper = ({ children: components }) => {
  const redirectToLoginPage = () => {
    window.location.href = getSubpath() ? `${getSubpath()}` : '/';
  };

  return (
    <div className="white-labelling-form-wrapper">
      <div className="tooljet-header">
        <Logo />
      </div>
      {components}
    </div>
  );
};

export default WhiteLabellingFormWrapper;
