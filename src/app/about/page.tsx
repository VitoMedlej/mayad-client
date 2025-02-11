"use client"
import Btn from '@/Components/Btn/Btn'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Index = () => {
  return (
    <Box>
        <Box sx={{height:{xs:'300px',sm:'400px'}}} className='relative flex '>
            <img src="https://ucarecdn.com/d990b6b2-7bc7-48c6-872c-094753a4a5d7/photo_5836907701576253669_y1.jpg" alt="" className="img" />
            <Box sx={{top:0,right:0,width:'100%',zIndex:1123,height:'100%',background:'black',opacity:.43}} className="absolute">

</Box>
            <Container className="absolute  justify-center flex col" sx={{height:'100%',position:'absolute',zIndex:1234,color:'white'}}>
                <Typography sx={{fontWeight:900,fontSize:"2.5em"}}>
                    About Us
                </Typography>
                <Typography sx={{maxWidth:'650px',fontSize:"1em"}}>

                Where creativity meets craftsmanship. We’re not just designing spaces, we’re crafting experiences. Let us transform your space into a masterpiece that tells your unique story.
                
                </Typography>

            </Container>
        </Box>

        <Container sx={{py:8,px:{xs:2,sm:1},maxWidth:'lg'}}>
          <Box sx={{width:'100%',height:'100%'}}>
            <img src="https://ucarecdn.com/d432b77e-cf5d-47d4-ad76-41440c25cc7b/WhatsAppImage20240309at1050181.jpeg" alt="" className="img" />
          </Box>
        </Container>
        <Container sx={{pt:2,px:{xs:2,sm:1}}}>
        <Box  className='flex row wrap' sx={{borderBottom:'1px solid white',width:{xs:'98%'},maxWidth:'lg',justifyContent:'space-between',my:5.5}} >
         <Box sx={{width:{xs:'100%',sm:'48%',md:'60%'}}}>

  
          <Typography  className='color'>
          LEARN MORE
          </Typography>
          <Typography  sx={{maxWidth:'450px',fontSize:{xs:'1.5em',sm:'2.65em'},fontWeight:900}}>
          Navigating Your Way to Exceptional Interiors
          </Typography>
          <Typography sx={{color:'#4d555e',fontSize:{xs:'.88em',sm:'1em'},pb:.65,maxWidth:'650px'}}>
          Our journey began with a simple vision: to transform ordinary spaces into extraordinary environments. Today, we are proud to be a leading Interior Design Studio, offering a comprehensive range of services from creative interior design solutions to custom woodwork and furniture manufacturing.


       
          </Typography>
          <Typography sx={{color:'#4d555e',fontSize:{xs:'.88em',sm:'1em'},pb:.65,maxWidth:'650px'}}>
At vfx works, we believe in the power of design to enhance lives and improve spaces. We work closely with our clients, understanding their needs and desires, to create spaces that are not only aesthetically pleasing but also functional and sustainable.
         
          </Typography>
          <Typography sx={{color:'#4d555e',fontSize:{xs:'.88em',sm:'1em'},pb:.65,maxWidth:'650px'}}>
Our commitment to quality, attention to detail, and personalized approach sets us apart. We take pride in our craftsmanship, using only the finest materials and techniques to ensure that every piece we create is built to last.
         
          </Typography>

          <Btn sx={{mt:2,borderRadius:'0'}}>
            Reach Us
          </Btn>
          </Box>
          <Box sx={{height:{xs:'300px',sm:'400px'},mt:.5,borderRadius:'6px', width:{xs:'100%',sm:'40%'}}}>
            <img style={{borderRadius:'6px'}} src={`https://ucarecdn.com/16aa3a77-15d2-4b55-9c83-1dd762a9b880/WhatsAppImage20240129at162647.jpeg`} alt="" className="img" />
          </Box>
        </Box>
        </Container>
    </Box>
  )
}

export default Index