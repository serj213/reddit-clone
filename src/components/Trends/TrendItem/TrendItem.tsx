import React from 'react';
import s from './TrendItem.module.scss';

// import img from './../../../assets/images/trends/01.jpg';

interface trendItemProps {
  img: string;
  name: string;
  text: string;
  author: string;
}

const TrendItem: React.FC<trendItemProps> = ({ img, name, text, author }) => {
  return (
    <div className={s.item}>
      <img src={img} alt="" />
      <h4 className={s.item__name}>{name}</h4>
      <p className={s.item__text}>{text}</p>

      <p className={s.item__author}>{author}</p>
    </div>
  );
};

export default TrendItem;
