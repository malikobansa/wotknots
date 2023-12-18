import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/HomeScreen/Header';
import MainContent from './components/HeroSection/MainContent';
import NewsSection from './components/HeroSection/NewsSection';

function App() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = '5923c983e11d4d01a29b697669f485a4';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setNews(data.articles);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        setError(error);
        setIsLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      <Header />
      <MainContent news={news}/>
      <NewsSection news={news}/>
    </>
  );
}

export default App;
