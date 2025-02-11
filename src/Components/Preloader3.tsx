"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import { Autoplay } from 'swiper';
import Btn from './Btn/Btn';



const Preloader3 = ({res}:{res:any}) => {
    const router = useRouter()
    const [imgs,setImgs] = useState([
        {img:'https://school.craterstudio.com/wp-content/uploads/2020/10/Motion-Graphic-3d-1.jpg'},
        // {img : `https://th.bing.com/th/id/R.1bd115eb313eb77c1b1adab41764509c?rik=we51JeZavsx%2fIQ&pid=ImgRaw&r=0`},
        // {img : `https://th.bing.com/th/id/R.f9a5184c0cdaa5fb293c10d30f1d44e7?rik=A4JN4HLwTn4ZZQ&pid=ImgRaw&r=0`},
       
     ])
    useEffect(() => {
        console.log('res: ', res);
    if (res && res?.MainCarousel && res?.MainCarousel?.length > 0) {
        console.log('res?.MainCarousel: ', res?.MainCarousel);
        // console.log('res: ', );
        setImgs(res?.MainCarousel)
    }
    }, [])
    
    return (
        <Box
        className="br"
        sx={{
          width: "95%",
          maxWidth: "none",
          minHeight: "300px",
          mt: 4,
          margin: "0 auto",
          height: { xs: "300px", sm: "350px" },
          display: { xs: "flex" },
          position: "relative",
        }}
      >
        <video
        className='br'
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
          src="https://kurve.me/wp-content/uploads/2024/09/kurve_reel_2023-1080p.mp4"
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            height: "100%",
            background: "black",
            opacity: 0.37,
            zIndex: 2,
          }}
        />
        <Box
          className="auto"
          sx={{
            position: "absolute",
            top: "80%",
            px: { xs: 4, sm: 5, md: 6 },
            maxWidth: "750px",
            transform: "translateY(-50%)",
            zIndex: 3,
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "1.5em", sm: "2.5em", md: "3em", lg: "3.8em" },
              fontWeight: 900,
            }}
          >
            Experience the Power of vfx works
          </Typography>
          
        </Box>
      </Box>
    )
}

export default Preloader3