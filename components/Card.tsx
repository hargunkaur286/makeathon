'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import asset1 from '../assets/asset1.svg';
import asset2 from '../assets/asset2.svg';
import asset3 from '../assets/asset3.svg';
import asset4 from '../assets/asset4.svg';
import asset5 from '../assets/asset5.svg';
import swiperImg1 from '../assets/swiperImg1.svg';

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

  const data = [
    {
      name: 'Simran',
      img: asset1, 
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
    {
      name: 'Simran',
      img: asset2,
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
    {
      name: 'Simran',
      img: asset3,
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
    {
      name: 'Simran',
      img: asset4,
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
    {
      name: 'Simran',
      img: asset5,
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
    // Add more data objects as needed
  ];

  return (
    <div className='card-color min-h-screen flex items-center justify-center'>
      <div className='w-3/4 m-auto'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div className='bg-white h-[450px] text-black rounded-xl' key={index}>
              <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
                <Image src={d.img} alt='' width={100} height={100} />
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

export default Card;

