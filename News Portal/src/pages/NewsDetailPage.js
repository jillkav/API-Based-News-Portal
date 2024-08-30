import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const NewsDetailPage = ({ news }) => {
  const { id } = useParams();
  const newsItem = news.find((item) => item.id === id);

  return (
    <div className="news-detail-page container">
      {newsItem ? (
        <div className="news-detail">
          <h1>{newsItem.title}</h1>
          <img src={newsItem.imageUrl} alt={newsItem.title} />
          <p>{newsItem.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NewsDetailPage;

