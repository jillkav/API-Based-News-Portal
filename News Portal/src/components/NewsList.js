import React from 'react';
import NewsCard from './NewsCard';
import '../App.css';

const NewsList = ({ news }) => {
  return (
    <div className="news-list">
      {news.map((newsItem) => (
        <NewsCard key={newsItem.id} news={newsItem} />
      ))}
    </div>
  );
};

export default NewsList;


