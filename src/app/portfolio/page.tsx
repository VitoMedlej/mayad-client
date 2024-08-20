"use client"
import { Box, Container, Divider, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
// import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";


const Index = () => {
  
  const router = useRouter();
  const [clientData, setClientData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_URL + '/api/get-data');
        const data = await response.json();
        if (data && data?.data && data?.data?.featuredProducts?.length > 0) {

          setClientData(data?.data?.featuredProducts);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <Box >
            
            <Box sx={{height:{xs:'300px',sm:'400px'}}} className='relative flex '>
            <img 
            src="https://ucarecdn.com/08159733-08f7-43bf-beb6-2a1b05b7b27a/photo_5829990695400751436_w.jpg" alt="" className="img" />
            <Box sx={{top:0,right:0,width:'100%',zIndex:1123,height:'100%',background:'black',opacity:.43}} className="absolute">

</Box>
            <Container className="absolute  justify-center flex col" sx={{height:'100%',position:'absolute',zIndex:1234,color:'white'}}>
                <Typography sx={{fontWeight:900,fontSize:"2.5em"}}>
                    Our Projects
                </Typography>
                <Typography sx={{maxWidth:'650px',fontSize:"1em"}}>

                Our Interior Design Ideas To Inspire Every Room In Your Home
                
                </Typography>

            </Container>
        </Box>
    
            <Box className='auto' sx={{py:6,my:8,background:'rgb(247, 247, 247)'}}>
    <Box className='auto' >
    <Typography sx={{textAlign:'center',width:'100%',pb:2,fontWeight:500,fontSize:"1.64em"}}>

    Featured Work

</Typography>
<Box  className="flex wrap row space-around">
                {
 clientData && clientData?.length > 0 && clientData?.map((i:any)=>{

                        return  <Box
                        className='auto'
                        key={i?._id}
                        // className='auto' 
                        sx={{width:{xs:'95%',sm:'310px',md:'400px'},
                        // height:{xs:'100%',sm:'500px',md:'550px'},
                        height:'fit-content',
                        mx:1,
                        my:1,
                        py:2
                        ,cursor:'pointer'}}
                        onClick={()=>router.push(`/portfolio/${`${i?._id}`}?title=${i.title.replace(/ /g,'-')}`)}>
                       

                        <Box key={i?.title} sx={{py:1,height:{xs:'100%',sm:'280px',md:'300px'}}}>
                            <img src={`${i?.images ? i?.images[0] : ''}`} alt="" className="img cover" />
                        </Box>
                        <Box>
                        <Typography 
                        
                        sx={{textAlign:'left',
                        color:'black',
                        fontSize:{xs:'1.189em',sm:'1.196em',md:'1.3em',lg:'1.42em'},
                        fontWeight:600}}>
                               {i?.title}
                                </Typography>
                        </Box>
                        </Box>
                    })
                }
</Box>

    </Box>

            </Box>
    </Box>
  )
}

export default Index