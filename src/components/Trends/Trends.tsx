import React from 'react';

import { Title } from '../Common/Title/Title';
import { RowsFour } from '../Common/RowsFour/RowsFour';
import TrendItem from './TrendItem/TrendItem';
import img from '../../assets/images/trends/02.jpg';

const Trends: React.FC = () => {
  const data = [
    {
      id: 0,
      img: img,
      name: 'Заголовок 1',
      text: 'Какой то текст статьи',
      author: 'Я автор',
    },

    {
      id: 1,
      img: img,
      name: 'Заголовок 2',
      text: 'Какой то текст статьи',
      author: 'Я автор',
    },

    {
      id: 2,
      img: img,
      name: 'Заголовок 3',
      text: 'Какой то текст статьи',
      author: 'Я автор',
    },

    {
      id: 3,
      img: img,
      name: 'Заголовок 4',
      text: 'Какой то текст статьи',
      author: 'Я автор',
    },
  ];

  return (
    <section>
      <Title>Trending today</Title>
      <RowsFour>
        {data.length &&
          data.map((item) => {
            return <TrendItem key={item.id} {...item} />;
          })}
      </RowsFour>
    </section>
  );
};

export default Trends;
