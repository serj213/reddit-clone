import React from 'react';
import s from './title.module.scss';

interface titleProp {
  children: React.ReactNode;
}

export const Title: React.FC<titleProp> = ({ children }) => {
  return <div className={s.title}>{children}</div>;
};
