'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card = () => {
  const settings={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className='bg-black my-20'>
    <div className=' w-3/4 m-auto '>
      <div className='mt-20'>
        <Slider {...settings}>
        {data.map((d) => (
      <div className='bg-white h- [450px] text-black rounded-xl' key={d.name}>
        <div>

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
    </div>
  )
};
const data=[
{
  name: 'Simran',
  review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur similique inventore atque sint, delectus aliquid voluptatum natus quidem accusantium voluptatibus temporibus quo, tempora eum sequi excepturi magni culpa expedita maxime'
},
{
  name: 'Simran',
  review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur similique inventore atque sint, delectus aliquid voluptatum natus quidem accusantium voluptatibus temporibus quo, tempora eum sequi excepturi magni culpa expedita maxime'
},
{
  name: 'Simran',
  review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur similique inventore atque sint, delectus aliquid voluptatum natus quidem accusantium voluptatibus temporibus quo, tempora eum sequi excepturi magni culpa expedita maxime'
},
{
  name: 'Simran',
  review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur similique inventore atque sint, delectus aliquid voluptatum natus quidem accusantium voluptatibus temporibus quo, tempora eum sequi excepturi magni culpa expedita maxime'
},
{
  name: 'Simran',
  review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur similique inventore atque sint, delectus aliquid voluptatum natus quidem accusantium voluptatibus temporibus quo, tempora eum sequi excepturi magni culpa expedita maxime'
},
{
  name: 'Simran',
  review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur similique inventore atque sint, delectus aliquid voluptatum natus quidem accusantium voluptatibus temporibus quo, tempora eum sequi excepturi magni culpa expedita maxime'
}
]
export default Card
