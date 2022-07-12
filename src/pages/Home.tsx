import React from 'react';

import { useDispatch } from 'react-redux';
import { Container } from '../components/Common/Container/Container';
import Trends from '../components/Trends/Trends';
import { fetchTrend } from '../redux/Actions/trend';
import Posts from '../components/Posts/Posts';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTrend());
  }, []);

  return (
    <main>
      <Container>
        <Trends />
        <Posts />
      </Container>
    </main>
  );
};

export default Home;
