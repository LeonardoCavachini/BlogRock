import React from 'react';
import {Link} from 'react-router-dom';

import goArt from '../assets/goArt.svg';

const SingleData = ({props}) => {
  const {id, imageUrl, title, author, article} = props
  return (
    <div className='w-[640px] flex'>
      <img 
          className="w-[34rem] h-[40rem]"
          src={imageUrl}
          alt=""
        />
      <div className="w-[34.1rem] h-[40rem] bg-[#FFFFFF]"
      >
        <div className="my-40 mx-20"
        >
          <h1 className="text-[#2D2D2D] font-[Rubik] text-2xl font-normal w-60 h-9 leading-9 not-italic"
          >{author}
          </h1>
          <h1 className="text-[#F1A10A] font-[Rubik] overflow-hidden h-22 text-4xl font-bold leading-10 my-[0.94rem] not-italic"
          >{title}
          </h1>
          <div className="h-52 w-[443px] "
          >
            <p className="text-[#2D2D2D] w-[25rem] overflow-hidden font-[Rubik] text-2xl font-normal h-[6rem] leading-8 not-italic"
            >{article}
            </p>
            <Link to={`/${id}`}> 
              <img src={goArt} alt="go icon" className='mt-[40%] ml-[82%]'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SingleData;
