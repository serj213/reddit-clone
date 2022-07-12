import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Title } from '../Common/Title/Title';
import { RowsFour } from '../Common/RowsFour/RowsFour';
import TrendItem from './TrendItem/TrendItem';
import TrendSkeleton from './trendSkeleton';
import { loadingStatus } from '../../types/trend';

import s from './trends.module.scss';

const Trends: React.FC = () => {
  const { trendArticles, loading } = useAppSelector((state) => state.trends);

  const skeleton = [...new Array(4)].map((item, index) => {
    return <TrendSkeleton />;
  });

  return (
    <section className={s.trends}>
      <Title>Trending today</Title>
      <RowsFour>
        {loading === loadingStatus.SUCCESS && trendArticles.length
          ? trendArticles.map((item) => {
              return <TrendItem key={item.id} {...item} />;
            })
          : skeleton}
      </RowsFour>
    </section>
  );
};

export default Trends;
