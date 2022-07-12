import React from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Title } from '../Common/Title/Title';
import { RowsFour } from '../Common/RowsFour/RowsFour';
import TrendItem from './TrendItem/TrendItem';
import img from '../../assets/images/trends/02.jpg';

const Trends: React.FC = () => {
  const { trendArticles } = useAppSelector((state) => state.trends);

  return (
    <section>
      <Title>Trending today</Title>
      <RowsFour>
        {trendArticles.length &&
          trendArticles.map((item) => {
            return <TrendItem key={item.id} {...item} />;
          })}
      </RowsFour>
    </section>
  );
};

export default Trends;
