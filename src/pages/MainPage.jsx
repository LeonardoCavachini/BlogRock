import React from 'react';


import ArticlesList from '../components/ArticlesList';
import NavBar from '../components/NavBar';

function Mainpage() {


  return (
    <div className=''>
      <div className='pb-40'>
      <NavBar />
      </div>
    <ArticlesList />
    </div>
  )
};

export default Mainpage;
