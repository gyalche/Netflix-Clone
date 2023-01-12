import React from 'react';
import Layout from '../Layout/Layout';
import PopularMovies from '../Components/Home/PopularMovies';
import TopRated from '../Components/Home/TopRated';
import Banner from '../Components/Home/Banner';
import Promos from '../Components/Home/Promos';

const HomeScreen = () => {
  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 mb-6">
        <Banner />
        <PopularMovies />
        <Promos />
        <TopRated />
      </div>
    </Layout>
  );
};

export default HomeScreen;
