import React, { useState } from 'react';
import './reviewCard.css';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

import { images } from '../assets/data/reviewData';
import { useEffect } from 'react';
const ReviewCard = (props) => {
  let prevIndex=0;
  const [startIndex, setStartIndex] = useState(0);
  const handleClickPrev = () => {
    const maxIndex = images.length - (window.innerWidth < 450 ? 1 : window.innerWidth < 720 ? 2 : 3);
    const newIndex = startIndex === 0 ? maxIndex : startIndex - 1;

    setStartIndex(newIndex);
  };

  const handleClickNext = () => {
    const maxIndex = images.length - (window.innerWidth < 450 ? 1 : window.innerWidth < 720 ? 2 : 3);
    const newIndex = startIndex === maxIndex ? 0 : startIndex + 1;

    setStartIndex(newIndex);
  };

  const visibleImages = images.slice(startIndex, startIndex + (window.innerWidth < 450 ? 1 : window.innerWidth < 720 ? 2 : 3));

  useEffect(() => {
    let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

// Element on which you want to detect the swipe right gesture
const swipeElement = document.querySelector('.reviewCard');

// Add a touchstart event listener to the element
const handleTouchStart = (event) => {
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
  
};

const handleTouchEnd = (event) => {
  endX = event.changedTouches[0].clientX;
  endY = event.changedTouches[0].clientY;

  const deltaX = endX - startX;


  if (deltaX > 10) {
   handleClickPrev()

  }

  if(deltaX < 0 ) {
  handleClickNext();

  }
};

swipeElement.addEventListener('touchstart', handleTouchStart);
swipeElement.addEventListener('touchend', handleTouchEnd);
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const rve = document.querySelector(".review h2");
      const rvec = document.querySelector(".review");
      const rvepos = rvec.offsetTop - rvec.offsetHeight + 150;

      if (rve && scrollPos > rvepos) {
        rve.style.opacity = "1";
        rve.style.top = 0 + 'px';
      } else {
        rve.style.top = 70 + 'px';
        rve.style.opacity = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      swipeElement.removeEventListener('touchstart', handleTouchStart);
      swipeElement.removeEventListener('touchend', handleTouchEnd);
    };
  },[handleClickNext, handleClickPrev]);
  
  return (
    <div className={`review ${props.mode ? '' : 'lightsssss'}`} id='4'>
      <h2>What our User See In this Extension</h2>

      <div className="reviewCard">
        <div className="prvBtn" onClick={handleClickPrev}>
          <BsFillArrowLeftCircleFill />
        </div>
        <div className="nxtBtn" onClick={handleClickNext}>
          <BsFillArrowRightCircleFill />
        </div>

        {visibleImages.map((image, index) => (
          <div key={index} className="reviewCard_userDetail">
            <div className="reviewCard_userImg">
              <img src={image.user} alt="Img of user" />
            </div>
            <div className="reviewCard_userName">
              <p>{image.name}</p>
            </div>
            <div className="reviewCard_desc">
              <p>{image.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
