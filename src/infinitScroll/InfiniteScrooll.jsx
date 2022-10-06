import React, { useEffect, useRef } from 'react';

const InfinitScrool = () => {
  const containerRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }

    const observer = new IntersectionObserver((entries) => {
      if(entries.some((entry) => entry.isIntersecting)) {
        console.log(entries)
        //setPageNumber((pageNumberInsideState) => pageNumberInsideState +1)
      }
    });
    observer.observe(containerRef.current)
    return () => {
      observer.disconnect();
    }
  },[]);

  return <p ref={containerRef} >estou aki fazendo não sei oque</p>
};

export default InfinitScrool
