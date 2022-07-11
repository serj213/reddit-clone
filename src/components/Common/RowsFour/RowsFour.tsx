import React from 'react';
import s from './RowsFour.module.scss';

interface RowsFourProp {
  children: React.ReactNode;
}

export const RowsFour: React.FC<RowsFourProp> = ({ children }) => {
  return <div className={s.row}>{children}</div>;
};
