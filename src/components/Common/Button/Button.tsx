import React from 'react';
import classnames from 'classnames';
import s from './Button.module.scss';

interface buttonProps {
  children: React.ReactNode;
  blue?: boolean;
  orange?: boolean;
  transparent?: boolean;
  small?: boolean;
}

export const Button: React.FC<buttonProps> = ({
  children,
  blue = false,
  orange = false,
  transparent = false,
  small = false,
}) => {
  return (
    <button
      className={classnames(
        s.button,
        { [s.blue]: blue },
        { [s.transparent]: transparent },
        { [s.post]: small },
      )}>
      {children}
    </button>
  );
};
