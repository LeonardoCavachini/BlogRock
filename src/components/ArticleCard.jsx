import React, {useRef} from "react";

import '../styles/main.css'

const ArticleCard = ({props}) => {
  const {imageUrl, title, author, article} = props

  return (
    <div className="grid-col-2">
      <div className="flex">
        <img 
          className="w-80 h-80"
          src={imageUrl}
          alt=""
        />
        <div className="w-[50%] h-80 bg-[#FFFFFF]"
        >
          <div className="w-[40%] h-[17rem] mx-20 my-5 items-center"
          >
            <h1 className="text-[#2D2D2D] font-[Rubik] text-base font-normal w-[10%] h-8 leading-8 not-italic"
            >{author}
            </h1>
            <h1 className="text-[#F1A10A] font-[Rubik] overflow-hidden h-22 text-3xl font-bold leading-10 my-[0.94rem] not-italic"
            >{title}
            </h1>
            <div className="h-52 w-[45%] "
            >
              <p className="text-[#2D2D2D] w-[40%] overflow-hidden font-[Rubik] text-base font-normal h-[6rem] leading-8 not-italic"
              >{article}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ArticleCard;
