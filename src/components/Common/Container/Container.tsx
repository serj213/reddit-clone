import React, { Children } from 'react';

import s from './container.module.scss';

interface containerProp {
  children: React.ReactNode;
}

export const Container: React.FC<containerProp> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};
