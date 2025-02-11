"use client"
import React from 'react'
import { Box,  Container, Divider, Grid, Typography } from "@mui/material"
import ContactSection from './ContactSection/ContactSection'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Perks from './Perks/Perks'
import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
import Testimonials from './Testimonials/Testimonials'
import Btn from './Btn/Btn'
import HomeProjects from './HomeComponents/HomeProjects'
import HomeProjectsRoutes from './HomeComponents/HomeProjectsRoutes'
import About from './HomeComponents/About'

const PreLoader = ({data,resImages}:any) => {
  console.log('data: ', data);
  const router= useRouter();
  
  const textsArray = [
    {
      id: 1,
      title: 'Customized Interior Design Solutions',
      desc: 'Our turn-key services are tailored to your specific needs. We understand that every project is unique, and we approach each one with a fresh perspective and an open mind.'
     , img : `https://ucarecdn.com/7154c006-81d6-4158-aaf1-fb30140b53e8/1cb881e440d0449ebbc5704de4cc0c15.jpg`
    },
    {
      id: 2,
      title: 'Exceptional Wood Work Services',
      desc: 'Our wood work services are all about precision and attention to detail. We take pride in crafting custom pieces that add a touch of elegance and sophistication to your space.'
      ,img: `https://ucarecdn.com/5d0a344d-9d8f-425b-a000-0f39071673eb/2.jpg`
      // ,img : `https://images.pexels.com/photos/4263067/pexels-photo-4263067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
    },
    {
      id: 3,
      title: 'Comprehensive Interior Design Services',
      desc: 'At vfx works, we offer a wide array of services under one roof. Our comprehensive approach ensures that every aspect of your interior design project is handled with professionalism and attention to detail.'
      ,img:`https://ucarecdn.com/9efff20b-0863-4303-a780-c530dcc8a2a2/3.jpg`
      // ,img :`https://mir-s3-cdn-cf.behance.net/project_modules/1400/a7781657088943.59c8c1ffda2b0.jpg`
    },
    {
      id: 4,
      title: 'Quality Furniture Manufacturing',
      desc: 'We also specialize in furniture manufacturing. Our furniture pieces are designed with a focus on quality, durability, and style. We use the finest materials and techniques to ensure that our furniture not only looks good but also lasts a lifetime.'
      // ,img:`https://images.pexels.com/photos/17965207/pexels-photo-17965207/free-photo-of-a-kitchen-with-a-chair-and-a-table-in-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
      ,img:'https://ucarecdn.com/bd31a2e2-c3f5-4bed-8604-31ab617c62ce/4.jpg'
    }
  ];
  
  
  // [{img:'https://ucarecdn.com/4635c19f-1ac8-454f-aaf7-8c67adfe4fd0/WhatsAppImage20230824at191722.jpeg',category:'Cricut machines'},
  // {img:'https://4.bp.blogspot.com/-Jt0CZBa0r6s/WQoWgzdYryI/AAAAAAAAuE4/WNVqO4RNJEoJZeWAGCCDtT-YdkxV-JaPwCPcB/s640/wholesale%2Bcraft%2Bblanks.JPG',category:'Customizable Blanks'},
  // {img:'https://ucarecdn.com/e490c41b-ddd1-4ef1-a06c-b1b0692bd83a/WhatsAppImage20230824at191716.jpeg',category:'Hot offers'} ,
  // {img:'https://ucarecdn.com/bfb9f54b-ee34-4cdc-930c-3a97234595fe/WhatsAppImage20230824at191719.jpeg',category: 'New Arrivals'}  ,
  // {img:'https://ucarecdn.com/d01c6f74-4d3b-46c4-9d31-67966950b09e/WhatsAppImage20230824at191720.jpeg',category:'Materials'}  ,
  
  // ]
  // const twinImages =resImages?.categoryImage && resImages?.categoryImage?.length > 1 ? resImages?.categoryImage  :  [{img:'https://ucarecdn.com/e79d337c-b709-4ea4-aec0-6f3403afff1e/WhatsAppImage20230824at191717.jpeg'},{img:'https://ucarecdn.com/3a54db45-c216-4076-996c-3ec4524be8f0/WhatsAppImage20230824at191727.jpeg'}]
  return (
    <Box >
      <MainCarousel resImages={resImages}/>
      {/* <Perks/> */}

    <Container maxWidth='lg'   sx={{mb:{xs:6,sm:6,md:8},mt:{xs:12,sm:6,md:8}}}>
      <Typography sx={{fontSize:{xs:'2em',sm:'2.8em'},maxWidth:'800px',fontWeight:900}} className='center white text-center auto '>
      Excellence in Every Detail with vfx works Services
      </Typography>
      <Typography sx={{width:'100%',maxWidth:'800px',flex:1,fontSize:{xs:'.8em',sm:'.9em'},
      fontWeight:300,color:'#4d555e',pt:1.5}} className='center white text-center auto'>
      At vfx works, we believe that every space has the potential to become unique,
        </Typography>
    </Container>
    {
        <HomeProjectsRoutes/>
    }
    <About/>
      {/* <Container id='serv'    sx={{maxWidth:'lg'}} className='flex wrap row justify-between'>

      {textsArray.map(i=>{
        return <Box key={i.id} className='flex row wrap' sx={{borderBottom:'1px solid white',width:{xs:'98%'},maxWidth:'lg',justifyContent:'space-between',my:5.5}} >
         <Box sx={{width:{xs:'100%',sm:'48%'}}}>

  
          <Typography  className='color'>
            .0{i.id}
          </Typography>
          <Typography  sx={{maxWidth:'400px',fontSize:{xs:'1.5em',sm:'2em'},fontWeight:500}}>
            {i.title}
          </Typography>
          <Typography sx={{color:'#4d555e',fontSize:{xs:'.88em',sm:'1em'},pb:.65,maxWidth:'350px'}}>
            {i.desc}
          </Typography>
          </Box>
          <Box sx={{height:{xs:'250px',sm:'300px'},mt:.5,borderRadius:'6px', width:{xs:'100%',sm:'48%'}}}>
            <img style={{borderRadius:'6px'}} src={i.img} alt="" className="img" />
          </Box>
        </Box>
      })}
      </Container>

    <Container  className='wrap row  center auto flex' sx={{background:'white',alignItems:'left',px:{sm:1},py:{xs:6,sm:12},display:'flex'}}>
        {
        [
          {
            title: 'Personalized Approach',
            text:`We believe that every client is unique. That’s why we offer personalized design solutions tailored to your specific needs and preferences.`,
            icon: 'https://www.svgrepo.com/show/494431/handshake-deal.svg'
          },
          {
            title: 'Quality Craftsmanship',
            text:`Quality is at the heart of everything we do. From our custom woodwork to our manufactured furniture, we use only the finest materials and techniques.`,
            icon: 'https://www.svgrepo.com/show/409793/tools.svg'
          },
          {
            title: 'Comprehensive Services',
            text:`Get a full suite of interior design services under one roof. From initial design concept to final installation.`,
            icon: 'https://www.svgrepo.com/show/476047/checklist.svg'
          }
          
        ].map(i=>{
          return <Box key={i.title} sx={{mx:2,my:1}} className='flex col items-center center'>
              <Box sx={{width:'20px'}}>
                <img src={i.icon} alt="" className="img" />
              </Box>
              <Box >
              <Typography className='center text-center'  sx={{maxWidth:'400px',fontSize:{xs:'.99em',sm:'1.1em'},fontWeight:500}}>
              {i.title}
          </Typography>
          <Typography className='center text-center' sx={{color:'#4d555e',fontSize:{xs:'.75em',sm:'.8em'},pb:.65,maxWidth:'350px'}}>
          {i.text}
          </Typography>
              </Box>
          </Box>
        })
        }
    </Container> */}

    {/* <Grid  sx={{width:'100%',pt:6}} container>
    <Grid  maxWidth='lg' item xs={12} sm={6}>
      <Box sx={{height:'500px',maxWidth:'450px'}} className='auto'>
        <img src="https://ucarecdn.com/a25b1349-8f3b-408d-8c44-e00ad9752c0e/photo_5832586041058509575_y.jpg" alt="" className="img" />
      </Box>
    </Grid>
    <Grid maxWidth='lg' item xs={12} sm={6}>
    <Container  className='wrap col   auto flex' sx={{alignItems:'left',px:{sm:1},pt:{xs:2,sm:4},display:'flex'}}>
        <Typography sx={{fontWeight:400}} className='color'>
          ABOUT US
        </Typography>
        <Typography component='h1' sx={{width:'100%',maxWidth:'500px',fontSize:{xs:'2em',sm:'3em'},fontWeight:900}} className=''>
        Crafting Spaces with Precision and Passion
        </Typography>
        <Typography sx={{width:'100%',maxWidth:'500px',flex:1,fontSize:{xs:'.8em',sm:'.9em'},fontWeight:300,color:'#4d555e',mt:2}} className=''>
        Welcome to vfx works, your trusted Interior Design Studio in Lebanon. We are committed to creating spaces that inspire, resonate, and transform.
        </Typography>
        <Btn className='color' sx={{width:'100px',color:'black',mt:2,px:0}}>
          Reach Us
        </Btn>
    </Container>

    </Grid>
   
   
    </Grid> */}
 




      <Box/>

        
      {/* <Container  className='wrap row  center auto flex' sx={{background:'white',alignItems:'left',px:{sm:1},py:{xs:3,sm:12},display:'flex'}}>
      <Typography  className='center text-center' sx={{my:4,width:'100%',fontSize:{xs:'1.5em',sm:'2em'},fontWeight:500}}>
            Meet The Team
          </Typography>
        <Box className='flex row wrap' sx={{justifyContent:'space-between'}}>
          {[1,2,3].map(i=>{
            return <Box key={i} sx={{width:{xs:'95%',sm:'32%'}}}>
              <Box sx={{width:'100%'}}>
                <img src="https://th.bing.com/th/id/OIP.IrUBHhdMo6wWLFueKNreRwHaHa?pid=ImgDet&rs=1" alt="" className="img" />
              </Box>
              <Box>
              <Typography  className='center' sx={{maxWidth:'400px',fontSize:{xs:'.8em',sm:'1em'},fontWeight:300}}>
            David R. Stevenson
          </Typography>
              </Box>
            </Box>
          })}
        </Box>
      </Container> */}
        
      
      
      {/* <Container  id='gallery' className='wrap row  center auto flex' sx={{background:'white',alignItems:'left',px:{sm:1},py:{xs:3,sm:12},display:'flex'}}>
      <Typography  className='center text-center' sx={{mt:4,width:'100%',fontSize:{xs:'1.5em',sm:'2em'},fontWeight:500}}>
            Our Gallery
            </Typography>
         
          <a className='center text-center auto' target='_blank' rel='noreferrer' href={`
https://www.instagram.com/vfx workslb/`}>

<Typography 
className=' cursor center flex gap1 black decor-none '
id="button"
component='p' sx={{width:'max-content',
mx:'1em',
mb:4,
alignItems: 'center',

fontWeight:400,fontSize:{xs:'.76em',sm:'.95em'}}}>
@vfx_works
</Typography>
  </a>
        <Box className='flex row wrap' sx={{justifyContent:'space-between'}}>
            {['https://ucarecdn.com/69b0fd55-c09a-47c3-b983-a7a0f8c7d464/380886384_18122833480310836_2037527117038793595_n.jpg',
              `https://ucarecdn.com/d6566a9c-1cbf-479a-8c86-161f905e1707/380879015_18122833432310836_7499431899428723809_n.jpg`,
              `https://ucarecdn.com/57923e4b-9c36-4910-9fc9-ee24dbb810ca/380886818_18122833288310836_8033594672296713165_n.jpg`
              ,`https://ucarecdn.com/b4bc45d4-b9d0-4ea0-b732-fe8d512836f0/380939103_18122833258310836_7226978765671778953_n.jpg`,
              `https://ucarecdn.com/1446276a-fe29-45c6-a912-b9dc3c67e4e4/380882960_18122833213310836_9136510878753639112_n.jpg`,
              `https://ucarecdn.com/2ab686b3-3be2-4d57-9ccd-f2f3d84013ba/380889662_18122833006310836_2215207237974251906_n.jpg`
        ].map(i=>{
            return <Box key={i} sx={{width:{xs:'33%'}}}>
              <Box sx={{width:'100%'}}>
                <img src={`${i}`} alt="" className="img" />
              </Box>
              <Box>
          
              </Box>
            </Box>
          })}
        </Box>
      </Container> */}
        <ContactSection/>
  </Box>
  )
}

export default PreLoader