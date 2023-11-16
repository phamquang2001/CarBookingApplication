import React, { ReactNode, useState } from 'react';
import Header from './Header/Header';
import './Layout.scss';
import { useSelector } from 'react-redux';
import Footer from 'app/components/Layout/Footer/Footer';
import { getAccountStatus } from 'utils/@reduxjs/logInSlice';
import { getTokenFromLocalStorage } from 'app/helpers/localStorage';
import { boolean } from 'yup';
export type PropsLayout = {
  children: ReactNode;
};

function Layout({ children }: PropsLayout) {
  const isAuthen = useSelector(getTokenFromLocalStorage);
  return (
    <div className="layout">
      {/* <Header /> */}
      <div className="wrapper">{children}</div>
      <div className="footer">{isAuthen && <Footer />}</div>
    </div>
  );
}
export default Layout;
