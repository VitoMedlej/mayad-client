"use client"
import Link from 'next/link';
import {Typography , Box, Divider } from '@mui/material'
import './style.css'
import SMicons from '../SMicons/SMicons';
// import SMicons from './SMicons';
// // import Logo from '../../assets/icons/logo';


const Footer = () => (
  <footer className="site-footer  " style={{color:'black',background:'#f7f7f7'}}>
    <Divider></Divider>
    <div className="container " style={{color:'black',background:'#f7f7f7'}}>
      <div className="site-footer__top ">
        <div className="site-footer__description">
          <div className='logos cursor'>

            <Link href="/">
              {/* <a><h1 className="site-logo"><Logo />E-Shop</h1></a> */}
            <img className='img ' src='https://wavescode8cdn.sirv.com/vfxlogo.jpg' alt="vfx works Lebanon Logo" />
            </Link>
          </div>
          <Typography component='h1' sx={{ fontSize: '.95em',color:"2b2b2b" }}  className='footer-p '>
          At vfx works, we believe that every space has a story to tell. Our passionate team of designers is dedicated to weaving unique narratives through the art of interior design. With an unwavering commitment to creativity and quality, we turn your vision into reality.
          </Typography>
          <SMicons/>

          {/* <ul className="site-footer__social-networks">
          <li><a href="https://www.facebook.com/profile.php?id=100063581229923" rel="noreferrer" target='_blank'><i className="icon-facebook"></i></a></li>
        <li><a href="#"><i className="icon-twitter"></i></a></li>
          <li><a href="#"><i className="icon-linkedin"></i></a></li>
          <li><a href={`${process.env.NEXT_PUBLIC_INSTA}`}rel="noreferrer" target='_blank' ><i className="icon-instagram"></i></a></li>
          <li><a href="#"><i className="icon-youtube-play"></i></a></li>
        </ul> */}
        </div>

        <div className="site-footer__links ">
      
          <ul className=' ul-white'>
            <li className='link-title'>Site links</li>
            <li><Link  href="/">Home</Link></li>
            <li><Link href="/portfolio">Our Projects</Link></li> 
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
     
          <ul  className='ul-white' style={{color:'black'}}>
            <li className='link-title'>Contact</li>
            <li><Link href="mailto:info@vfxworks.com">Info@vfxworks.com</Link></li>
            
            {/* <li><a href="https://www.facebook.com/profile.php?id=100076163602459/" target="_blank" rel="noreferrer" >Facebook</a></li> */}

            <li><a href="https://www.instagram.com/vfx workslb/" target="_blank" rel="noreferrer" >@vfx_works</a></li>
            <li><a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} rel="noreferrer" target='_blank' >+{process.env.NEXT_PUBLIC_WA}</a></li>
            <li style={{color:'rgba(38,38,38,.816)'}}>+96121788484</li>
            {/* <li><a href={`http://tiktok.com/@thecraftroomlb`} rel="noreferrer" target='_blank' >TikTok</a></li> */}
          </ul>
        </div>
  
      </div>
    </div>

    <div className="site-footer__bottom " style={{color:'black',borderTop:"1px solid #0000001f"}}>
      <div className="container " style={{color:'black'}}>
        <p>Website Developed By{' '}
          <a style={{ color: 'black' }} href={`${'https://www.wavescode.com'}`}>@Wavescode Agency</a></p>
      </div>
    </div>
  </footer>
);


export default Footer

