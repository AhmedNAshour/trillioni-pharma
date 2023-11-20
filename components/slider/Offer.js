/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
'use client';
import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Navigation]);

const OfferSlider = () => {
  const getSlidesPerView = () => {
    // Determine the number of slides to show based on the window width
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      return 1;
    } else {
      return 3;
    }
  };

  const swiperRef = React.useRef(null);

  React.useEffect(() => {
    const handleResize = () => {
      // Update slidesPerView when the window is resized
      swiperRef.current.slidesPerView = getSlidesPerView();
      swiperRef.current.update;
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Initialize slidesPerView on mount
    handleResize();

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const data = [
    {
      img: 'market.svg',
      title: 'Data-Driven Insights',
      text: 'Unlock valuable market insights to optimize production and business decisions.',
    },
    {
      img: 'consulting.svg',
      title: 'Streamlined Sourcing',
      text: 'Effortlessly source products, request quotations, and compare offerings with ease.',
    },
    {
      img: 'cognity.svg',
      title: 'Expedited Market Entry',
      text: 'Accelerate market entry for pharmaceutical innovators, breaking distribution barriers.',
    },
  ];

  return (
    <>
      <div className='box-swiper'>
        <div className='swiper-container swiper-group-4'>
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onResize={() => {
              // Update slidesPerView when the window is resized
              swiperRef.current.slidesPerView = getSlidesPerView();
            }}
            navigation={{
              prevEl: '.swiper-button-prev-5',
              nextEl: '.swiper-button-next-5',
            }}
            className='swiper-wrapper pb-70 pt-5'
          >
            {data.map((item, i) => (
              <SwiperSlide key='{item.title}'>
                <div className='swiper-slide'>
                  <div className='card-grid-style-2 hover-up'>
                    <div className='grid-2-img'>
                      <img
                        src={`assets/imgs/page/homepage1/${item.img}`}
                        alt='Agon'
                      />
                    </div>
                    <h3 className='text-heading-5 mt-20'>{item.title}</h3>
                    <p className='text-body-text color-gray-600 mt-20'>
                      {item.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OfferSlider;
