import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchNews } from './services/api';
import HomePage from './pages/HomePage';
import NewsDetailPage from './pages/NewsDetailPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNews();
      setNews(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage news={news} />} />
          <Route path="/news/:id" element={<NewsDetailPage news={news} />} />
        </Routes>
      )}
      <Footer />
    </Router>
  );
}

export default App;
