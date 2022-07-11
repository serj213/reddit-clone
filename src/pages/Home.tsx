import React from 'react';

import { Container } from '../components/Common/Container/Container';
import Trends from '../components/Trends/Trends';
import { fetchTrend } from '../redux/Actions/trend';
import { useDispatch } from 'react-redux';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTrend());
  }, []);

  return (
    <main>
      <Container>
        <Trends />
      </Container>
    </main>
  );
};

export default Home;
