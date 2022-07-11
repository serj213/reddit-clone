import React from 'react';
import s from './Layout.module.scss';

interface layoutProp {
  children: React.ReactNode;
}

const Layout: React.FC<layoutProp> = ({ children }) => {
  return <div className={s.layout}>{children}</div>;
};

export default Layout;
