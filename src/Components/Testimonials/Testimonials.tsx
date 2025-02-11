"use client"

import { Box, Typography } from '@mui/material'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import TestimonialCard from './TestimonialCard';
import { Autoplay } from 'swiper';
// import { Autoplay, Pagination } from 'swiper/modules';
// import {FreeMode, Autoplay, Pagination} from "swiper";



// const Clients = [
//     {id:1,
//         description:``,
//         name:'Zekra Advertising Specialist',img:'https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png'},
//         {id:2,
//             description:``,
//             name:'',img:'https://ucarecdn.com/6e360177-750f-4671-8b74-edbc38f20c90/337875439_610147264297606_3941855933110310434_nremovebgpreview.png'},
//         {id:3,
//             description:``,
//             name:`Powerhouse’s Owner `,img:'https://ucarecdn.com/3b40bedc-0aa3-4247-a196-fd05de4d4f87/003011.jpg'}

// ]


const Testimonial = () => {


const tests =[
  {
    reviewer: "Eva Sayegh",
    description: "One of the most creative, professional and talented teams I ever dealt with. vfx works managed to offer perfect and flawless designs to properties located outside of Lebanon virtually as if the whole team was physically available on site. The expert touch and vision of the head designer Mr. Omar makes all the difference. I highly recommend their services."
  },
  {
    reviewer: "Fadi Dinnawi",
    description: "Very professional, highly recommended ❤"
  },
  {
    reviewer: "Souad Ghalayini",
    description: "Very tasteful and creative, good service and very friendly team. Acceptable prices and good timing with delivery.👍"
  },
  {
    reviewer: "firas ghalayini",
    description: "The final result was very nice\nThank you for your hard work Omar"
  },
  {
    reviewer: "MherMardoyan Career Coach",
    description: "Highly recommended company. Friendly and professional. Reasonable prices and delivers on times. Deserves a 5 stars."
  },
  {
    reviewer: "Roula Jaafarawi",
    description: "They are such a great team i really enjoyed my experience with this company ❤️"
  },
  {
    reviewer: "Sahar Ramadan",
    description: "vfx works you are the best!!!!! Everything was easy and smooth, trust worthy, paying attention to every single detail from A to Z, don't hesitate to ask them anything, even if you have 10000 questions! Highly recommended."
  },
  {
    reviewer: "Soha Daroub",
    description: "Thank you vfx works represented by its owner Omar M Etal. My room is a joy to be in and can't wait for this lock down to end so we can start with the second bedroom.  Great design and immaculate execution, wonderful staff and service.  Easy and comfortable to work with. Thank you guys for everything ❤"
  }
];
    
    
  return (
    <Box className=' flex col ' sx={{width:'100%',height:'100%'}}>
 <Box className='flex col'  sx={{flex:1,width:'100%',pt:'6em'}}>
 <Typography
                className='sectionTitle  text-center auto center box'
                sx={{
                  pb:'.5em',
                  pt:4,
                  width:'100%',
                  display:'flex',
                  fontSize: {
                    xs: '1.62em',
                    sm: '2em',md:'2.5em'
                },
                flex:1,
                fontWeight: '500'
            }}>
               Our Customers speak for us
            </Typography>
            </Box>
       <Box
            sx={{
            
         
            margin: '0em auto',
            width: '100%',
            maxWidth: 'lg',
            mb:'6em',
            display: {
                xs: 'flex'
            },
            // height: '100%'
        }}>

            <Swiper
                pagination={{
                clickable: true
            }}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
            
                // navigation={true}
                spaceBetween={10}
                slidesPerView={2}
                breakpoints={
 {// when window width is >= 320px
 320: {
    slidesPerView:1,
    spaceBetween: 20
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 3,
    spaceBetween: 20
  }}

                }
                modules={[ Autoplay]}
              >

                {tests.map((item ) => {
                    if (!item.reviewer) 
                        return
                    return <SwiperSlide
                        style={{
                        padding:'2em 0',
                        marginRight: '0 !important'
                    }}
                        key={item.reviewer}>
                         <TestimonialCard title={item.reviewer} reviewer={item.reviewer} description={item.description}/>

                    </SwiperSlide>
                    // return <SwiperSlide className='swiper-wrapper1'
                    // style={{width:'100%',height:'100%'}} key={item._id}>     {/* <HouseCard
                    //   img={property.images[0] || property.images[1]}         width='95%'
                    // id={property.id}         isFeatured={isFeatured !== undefined ? isFeatured :
                    // true}         propertySize={property.propertySize}
                    // type={property.type}         baths={property.bathrooms}
                    // rooms={property.rooms}         currency={property.currency}
                    // price={property.price}         title={property.title}
                    // location={property.location}/> */}          <ProductCard
                    // handleQuickView={handleQuickView}          title={item.title}
                    // images={item.images}          price={item.price}          _id={item._id}
                    //     category={item.category}          /> </SwiperSlide>

                })
}

            </Swiper>
        </Box>
    </Box>
  )
}

export default Testimonial