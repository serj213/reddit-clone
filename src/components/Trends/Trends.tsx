import React from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Title } from '../Common/Title/Title';
import { RowsFour } from '../Common/RowsFour/RowsFour';
import TrendItem from './TrendItem/TrendItem';
import TrendSkeleton from './trendSkeleton';
import { loadingStatus } from '../../types/trend';

const Trends: React.FC = () => {
  const { trendArticles, loading } = useAppSelector((state) => state.trends);

  const skeleton = [...new Array(4)].map((item, index) => {
    return <TrendSkeleton />;
  });

  return (
    <section>
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
