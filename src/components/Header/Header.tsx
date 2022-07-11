import React from 'react';

import { Button } from '../Common/Button/Button';
import LogoIcon from './logoIcon';

import s from './header.module.scss';

import SearchIcon from '@mui/icons-material/Search';

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.header__column}>
        <LogoIcon id="icon" />
        <LogoIcon id="text" />
      </div>
      <div className={s.header__search}>
        <label>
          <SearchIcon />
        </label>
        <input type="text" placeholder="Search Reddit" />
      </div>
      <div className={s.header__auth}>
        <Button transparent>Log In</Button>
        <Button blue>Sign In</Button>
      </div>
    </header>
  );
};

export default Header;
