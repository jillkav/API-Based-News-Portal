
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NewsCard = ({ news }) => {
  return (
    <div className="news-card">
      <img src={news.imageUrl} alt={news.title} />
      <div className="news-card-content">
        <h2>{news.title}</h2>
        <p>{news.content}</p>
        <Link to={`/news/${news.id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default NewsCard;



