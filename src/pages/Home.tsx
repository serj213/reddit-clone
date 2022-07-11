import React from 'react';

import { Container } from '../components/Common/Container/Container';
import Trends from '../components/Trends/Trends';

const Home: React.FC = () => {
  return (
    <main>
      <Container>
        <Trends />
      </Container>
    </main>
  );
};

export default Home;
