'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Card = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets, laptops, etc.)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small devices (portrait tablets and large phones)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Small devices (landscape phones)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className='card-color min-h-screen flex items-center justify-center'>
      <div className='w-3/4 m-auto'>
        <Slider {...settings}>
          {data.map((d) => (
            <div className='bg-white h-[450px] text-black rounded-xl' key={d.name}>
              <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
                <Image src={d.img} alt='' width={176} height={176} />
              </div>
              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='text-xl font-semibold'>{d.name}</p>
                <p>{d.review}</p>
                <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const data = [
  {
    name: 'Simran',
    img: '/assets/img.png',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    name: 'Simran',
    img: '../assets/swiperImg1.svg',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    name: 'Simran',
    img: '../assets/swiperImg1.svg',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
  },
  {
    name: 'Simran',
    img: '../assets/swiperImg1.svg',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    name: 'Simran',
    img: '../assets/swiperImg1.svg',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
  },
  {
    name: 'Simran',
    img: '../assets/swiperImg1.svg',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
  },
];

export default Card;
