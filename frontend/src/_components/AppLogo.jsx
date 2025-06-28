import React from 'react';
import Logo from '@assets/images/favicon-32x32.png';
import { retrieveWhiteLabelLogo } from '@white-label/whiteLabelling';

export default function AppLogo({ isLoadingFromHeader, className }) {
  const url = retrieveWhiteLabelLogo();

  return (
    <>
      (
      <>
        {isLoadingFromHeader ? (
          <Logo height={26} data-cy="page-logo" />
        ) : (
          <img src="assets/images/favicon-32x32.png" className={className} />
        )}
      </>
      )
    </>
  );
}
