import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
import '../styles/main.css';

import ArticleCard from './ArticleCard';
import Carrosel from '../components/carrosel';
import SingleData from './SinlgeData';

const SearchArticles = () => {
  
  const [pageNumber, setPageNumber] = useState(0)
  const [articles, setArticles] = useState([])
  const containerRef = useRef();

  useEffect(()=>{
    let cancel
    axios({
      method: 'GET',
      url: 'https://stormy-shelf-93141.herokuapp.com/articles',
      params: {_limit: 6, _page: pageNumber},
      cancelToken: new axios.CancelToken(c => cancel =c)
    }).then(res => {
      setArticles(prevBooks => {
        return [...new Set([...prevBooks, ...res.data])]
      })
    }).catch(e => {
      if (axios.isCancel(e)) return
      console.log(e)
    })
    return () => cancel()
  },[pageNumber])
  
console.log(articles)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if(entries.some((entry) => entry.isIntersecting)) {
        setPageNumber((pageNumberInsideState) => pageNumberInsideState +1)
      }
    });
    observer.observe(containerRef.current)
    return () => {
      observer.disconnect();
    }
  },[]);
 
  return (
    <>
    <div>
    {articles.map((article) => (
      <>
        <div className='mt-7'>
        <ArticleCard key={article.id} props={article}/>
        </div>
        <div className='mt-7'>
        <SingleData key={article.id} props={article}/>
        </div>
      </>
      ))}
    </div>
    <p ref={containerRef} />
    </>
  )
};

export default SearchArticles;
