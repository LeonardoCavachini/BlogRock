import React from 'react';
import {Link} from 'react-router-dom';

import goArt from '../assets/goArt.svg';

const Carrosel = ({props}) => {
  const {id, imageUrl, title, author, article} = props
  return (
   <div className='w-[10%]'>
    <img src={imageUrl} alt="art photo" />
    <div>
      <h2>{author}</h2>
      <h1>{title}</h1>
      <p>{article}</p>
      <Link to={`/${id}`}> 
        <img src={goArt} alt="go icon" />
      </Link>
    </div>
   </div>
  )

}

export default Carrosel;
