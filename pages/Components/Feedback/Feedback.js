import Image from 'next/image';
import React from 'react';
import Slider from "react-slick";
import feedstyle from '../../../public/css/Review.module.css';
import {feedbackContent} from './feedbackData';
const Feedback = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
   
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    return (
        <div className='py-5'>
          <div className="container">
            
          <h2 className={feedstyle.feedTitle}>user Feedback</h2>
          <div className="Row">
          <Slider {...settings}>
          
         {
          feedbackContent.map((item)=><div key={item.id}>
            <div className={feedstyle.reviewCard}>
              <div className={feedstyle.reviewer}>
          <div className={feedstyle.partImgr}>
            <Image src={item.img}></Image>
          </div>
          <div className={feedstyle.partText}>
            <h5>{item.name}</h5>
            <p>{item.desigation}</p>
          </div>
              </div>
              <div className={feedstyle.reviewTxt}>
              <p>  {item.description}</p>
              </div>
            </div>
          </div>)
         }
          </Slider>
        </div>
        </div>
        </div>
      );
};

export default Feedback;