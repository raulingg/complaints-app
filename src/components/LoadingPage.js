import React from 'react';
import * as LoaderStyles from '../styles/components/Loader';

const LoadingPage = () => (
  <LoaderStyles.Loader>
    <LoaderStyles.Image src="images/loader.gif" alt="load spinner" />
  </LoaderStyles.Loader>
);

export default LoadingPage;
