"use client"
import { Box } from '@mui/material';
import React from 'react'
// import {FaInstagram,FaWhatsapp} from 'react-icons/fa';
// import {BsTiktok} from 'react-icons/bs';
import {CiFacebook,CiInstagram,CiLinkedin} from 'react-icons/ci'

const sm = [
    {
        Icon:'https://images.squarespace-cdn.com/content/v1/56e2e0c520c6472a2586add2/1615388332386-LFQRQFE53FIOLDRNADTY/2.png',
        href:'https://www.instagram.com/vfx workslb/'
    },
    {Icon:'https://logospng.org/download/whatsapp/logo-whatsapp-4096.png',href:'https://wa.me/+96103757679'},
  
 ]
const SMicons = ({sx,color}:{color?:string,sx?:any}) => {
  return (
    // <Box className='row flex' sx={{zIndex:1234567,maxWidth:'200px',mt:2,...sx}}>

    // {sm.map((item)=>{
    //   return <a key={item.href} className='center flex auto rounded smIcon pointer align-center gap white' href={`${item.href}`} target='_blank' rel={'noneferrer'}>
    //         <Box sx={{width:'30px'}}>

    //         <img src={item.Icon} alt="" className="img cover" />
    //         </Box>
    //      </a>
    // })}
    // </Box>
    <Box className='flex white' sx={{fill:'white',mt:1}}>

          <Box className='cursor pointer white'  sx={{width:'50px'}}>
         <a href='https://www.facebook.com/Desigcompass/' style={{color:'#3d8af7',fill:'#3d8af7'}} className='white' target='_blank' rel='noopener' >
            
              <CiFacebook fontSize='2em' fill='white !important' color='white'></CiFacebook>
         </a>
           
            </Box>
            <Box fontSize='2em' className='cursor pointer' sx={{width:'50px'}}>
         <a href='https://www.instagram.com/vfx workslb/' style={{color:'#3d8af7',fill:'#3d8af7'}} className='white' target='_blank' rel='noopener' >
              <CiInstagram></CiInstagram>
         </a>
        
            </Box>
            <Box fontSize='2em' className='cursor pointer' sx={{width:'50px'}}>
         <a href='https://www.linkedin.com/company/68516974/' style={{color:'#3d8af7',fill:'#3d8af7'}} className='white' target='_blank' rel='noopener' >
              
              <CiLinkedin></CiLinkedin>
         </a>
            
            </Box>
            
            
          </Box>
    )
}

export default SMicons