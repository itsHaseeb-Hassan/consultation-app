"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from '../constant/Slider.json'

const CustomSlider = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 2 // optional, default to 1.
        }
    };



    return (
        <>
      <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000} // Adjust autoplay speed as needed
      keyBoardControl={true}
      customTransition="transform 30000ms ease-in-out"
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
     {data?.map((list) => (
        <div key={list.id} className=' w-[500px]  mx-auto'>
            <p  className='w-100 text-center font-normal text-[15px] text-[#4C38C3]' >{list.description}</p>
            </div>
          ))}
    </Carousel>
        </>
    )
}

// transition-transform duration-300 transform hover:scale-105 hover:shadow-md

export default CustomSlider