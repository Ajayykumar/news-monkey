import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner.js';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5d2120750da54b17ab191728f15efe3f&pageSize=8&category=${props.category}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
  };

  const handleNextClick = async () => {
    if (!(page + 1 > Math.ceil(totalResults / 8))) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5d2120750da54b17ab191728f15efe3f&page=${page + 1}&pageSize=8&category=${props.category}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setPage(page + 1);
      setLoading(false);
    }
  };

  const handlePreviousClick = async () => {
    if (page > 1) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5d2120750da54b17ab191728f15efe3f&page=${page - 1}&pageSize=8&category=${props.category}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setPage(page - 1);
      setLoading(false);
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    updateNews();
  }, [props.category]);

  return (
    <div className='container my-3 mt-4'>
      <h1 className='mt-5 pt-5'>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines </h1>
      {loading && <Spinner />}
      <div className='row'>
        {articles.map((element) => {
          return (
            <div className='col-md-3 mt-3 ' key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={!element.author ? 'Unknown' : element.author}
                Date={element.publishedAt}
              />
            </div>
          );
        })}
      </div>
      <div className='d-grid gap-2 d-flex justify-content-between mt-5'>
        <button disabled={page <= 1} className='btn btn-dark me-md-2' onClick={handlePreviousClick} type='button'>
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / 8)}
          className='btn btn-dark'
          onClick={handleNextClick}
          type='button'
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
