import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Layout from './components/Common/Layout/Layout';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default App;
