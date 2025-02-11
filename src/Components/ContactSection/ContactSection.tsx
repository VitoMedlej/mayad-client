"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'



import {AiOutlineWhatsApp,AiOutlineInstagram} from 'react-icons/ai'
import {BsLinkedin,BsInstagram} from 'react-icons/bs'
// import EmailInput from './EmailInput'
const Perks = () => {
    return (
        <Box
            className='flexed  br'
            sx={{
                mt: '0',
                mb:6,
                mx:'auto',
                flexWrap: 'wrap',
                background:'#f5f5f5de',
                py: '3.5em',
                justifyContent: 'space-evenly',
                width: '95%',
                color: 'black'
            }}>
            <Box
                className='flex'
                sx={{
                    padding:2,

                    textAlign: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                <Typography sx={{
                    fontWeight: '900',
                    fontSize: '3em'
                }}>
                  Get In Touch
                </Typography>
                <Typography
                    className='black'
                    sx={{
                        fontSize: '.8em'
                    }}>Reach out to us through any of these support channels</Typography>
            </Box>
            <Box className='items-center' sx={{ display: 'flex', flexWrap: 'wrap',
                        flexDirection: {xs:'column',sm:'row'}
                ,
                
                justifyContent: 'center', gap: '1em' }}>
                {/* {[{title:'Phone Number',value:"70873045",isLink:false}, {isLink:true,title:'Instagram',value:'https://www.instagram.com/power_house_european/'}, {isLink:true,title:'Facebook',value:'https://www.facebook.com/online.european.outlet/'}].map(i => {
                    return 
                })} 

                <Box

                    sx={{
                        display: 'flex',
                        gap: '.5em',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                    <Box className='flexed'>
                        <AiOutlineInstagram  color= 'black' />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>


                            <Typography
                                sx={{
                                    fontSize: '1.1em'
                                }}>Instagram</Typography>
                        </a>

                        }
                    </Box>

                </Box>


{/* 
                <Box

sx={{
    display: 'flex',
    gap: '.5em',
    flexDirection: 'row'
}}>
<Box className='flexed' sx={{width:'30px',color:'black',filter:'invert(1)'}}>
 
     <img src="https://cdn-icons-png.flaticon.com/512/1946/1946552.png" alt="" className="img" />
</Box>
</Box> */}

                 <Box

                    sx={{
                        display: 'flex',
                        gap: '.5em',
                    }}>
                    <Box className='flex items-center'>
                        <BsLinkedin color='black' />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                        {<a className='black' target={`_blank`} style={{textDecoration:"none"}} rel='noreferrer' href={"https://www.linkedin.com/company/68516974/"}>


                            <Typography
                                sx={{
                                    fontSize: '1.1em'
                                }}>LinkedIn</Typography>
                        </a>

                        }
                    </Box>

                </Box>


                <Box

                    sx={{
                        display: 'flex',
                        gap: '.5em',
                        flexDirection: 'row'
                    }}>
                    <Box className='flex items-center'>
                        <AiOutlineWhatsApp  color= 'black' />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                        {<a className='black' target={`_blank`} style={{textDecoration:"none"}} rel='noreferrer' href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`}>


                            <Typography
                                sx={{
                                    fontSize: '1.1em'
                                }}>Whatsapp</Typography>
                        </a>

                        }
                    </Box>

                </Box>


                <Box

sx={{
    display: 'flex',
    gap: '.5em',
    flexDirection: 'row'
}}>
<Box className='flex items-center'>
    <BsInstagram  color= 'black' />
</Box>
<Box
    sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }}>
    {<a className='black' target={`_blank`} style={{textDecoration:"none"}} rel='noreferrer' href={`https://www.instagram.com/vfx workslb/`}>


        <Typography
            sx={{
                fontSize: '1.1em'
            }}>Instagram</Typography>
    </a>

    }
</Box>

</Box>


                


            </Box>
        </Box>
    )
}

export default Perks