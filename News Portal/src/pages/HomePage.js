import React from 'react';
import NewsList from '../components/NewsList';
import '../App.css';

const HomePage = ({ news }) => {
  return (
    <div className="home-page container">
      <h2>Latest Sports News</h2>
      <NewsList news={news} />
    </div>
  );
};

export default HomePage;




