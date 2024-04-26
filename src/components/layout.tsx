import React from 'react';
import Header from './Header';
import '../styles/globals.scss';

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
