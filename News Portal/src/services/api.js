import axios from 'axios';

const API_BASE_URL = 'https://inshortsapi.vercel.app/news';

export const fetchNews = async (category = 'sports') => {
  try {
    const response = await axios.get(`${API_BASE_URL}?category=${category}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

