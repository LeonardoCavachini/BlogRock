import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

import NavBar from '../components/NavBar';

const SinglePage = () => {
  const { id } = useParams();

  const [articles, setArticles] = useState([])

  useEffect(()=>{
    axios({
      method: 'GET',
      url: `https://stormy-shelf-93141.herokuapp.com/articles/${id}`,
    }).then(res => {
      setArticles(res.data)
    })
  },[])

  console.log(articles)
  const {imageUrl, title, author, article} = articles


  return (
    <>
      <div className='pb-40'>
      <NavBar />
      </div>
      <div className='flex p-2'>
        <div  className='' >
        <img src={imageUrl} alt=""/>
        </div>
        <div className='bg-[#FFFFFF] p-5'>
          <h1 className='text-[#2D2D2D] font-[Rubik] text-2xl font-normal w-60 h-9 leading-9 not-italic'>{author}</h1>
          <h1 className="text-[#F1A10A] font-[Rubik] overflow-hidden h-22 text-4xl font-bold leading-10 my-[0.94rem] not-italic">{title}</h1>
          <div className="h-52 w-[443px] "
          >
            <p className="text-[#2D2D2D] w-[25rem] overflow-hidden font-[Rubik] text-2xl font-normal h-[6rem] leading-8 not-italic">{article}</p>
          </div>
        </div>
      </div>
    </>
  )
};

export default SinglePage;
