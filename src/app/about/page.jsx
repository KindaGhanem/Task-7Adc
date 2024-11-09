import NavBar from '@/component/NavBar/NavBar'
import React from 'react'

import logo from './../../assets/images/logo.png'
import { CiLocationOn, CiMenuBurger } from "react-icons/ci";
import { FaAngleDown, FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Footer from '@/component/Footer/Footer';
import Hero from '@/component/Hero/Hero';
import WelcomeCommon from '@/component/WelcomeCommon/WelcomeCommon';

import imageCity from './../../assets/images/imageCity.png'
import Counter from '@/component/Counter/Counter';

import counterimg1 from './../../assets/images/icon_map_counter.png'
import counterimg2 from './../../assets/images/icon_experience.png'
import counterimg3 from './../../assets/images/icon_guide.png'
import counterimg4 from './../../assets/images/icon_best price.png'

import sayimage from './../../assets/images/Ellipse.png'
import { ImQuotesRight } from "react-icons/im";
import Explore from '@/component/Explore/Explore';


export default function page() {

    const items=[
        {
            id:1,
            link: '/',
            name : 'Home' ,
        },
        {
            id:2,
            link: '/about',
            name : 'About Us' ,
        },
        {
            id:3,
            link: '/',
            name : 'Tour Packages' ,
        },
        {
            id:4,
            link: '/',
            name : 'Contact Us' ,
        },
    ]
    const FirstPartFooter =[
        {
        icon:'',
        list:'Bike and Rickshaw rental '
        } ,
        {
        icon:'',
        list:'Guided Tours of Lucca '
        } ,
        {
        icon:'',
        list:'Guided Bike Tour of Lucca '
        },
        {
        icon:'',
        list:'Trip In The Tuscan Hills '
        },
        {
        icon:'',
        list:'Transportation With Luxury Cars '
        },
        {
        icon:'',
        list:'Wine Tours By Bus With Guide '
        },
    ]
    const secondPartFooter = [
    {
        icon:'',
        list:'Home'
    } ,
    {
        icon:'',
        list:'About Us '
    } ,
    {
        icon:'',
        list:'Tour Packages '
    },
    ]
    const thirdPartFooter = [
    {
        icon:'',
        list:' Terms of Use'
    } ,
    {
        icon:'',
        list:'Provicy Policy '
    } ,
    ]
    const fourthPartFooter = [ 
    {
        icon : <CiLocationOn className="iconContactFooter" />,
        list : 'Piazza Napoleone, Lucca, Tuscany'
    },
    {
        icon : <FaPhone className="iconContactFooter" />    ,
        list : '	+39 346 368 5708'
    },
    {
        icon : <MdEmail className="iconContactFooter" />    ,
        list : '	italiainlimo@gmail.com'
    },
    ]
    const fifthPartFooter=[
    {
        icon: <FaTwitter className="SocialFooter" />,
        list:''
    } ,
    {
        icon: <FaFacebook className="SocialFooter"  /> ,
        list:''
    } ,
    {
        icon: <FaInstagram className="SocialFooter"  />,
        list:''
    },
    ]

    const welcomeSec = [
        {
          id:1 ,
          number : '20+' ,
          desc:'Years Experience' ,
        },
        {
          id:2 ,
          number : '100+' ,
          desc:'Happy Customer' ,
        },
        {
          id:3 ,
          number : '15+' ,
          desc:'Choice of Services' ,
        },
        {
          id:4 ,
          number : '10+' ,
          desc:'Professional Guides' ,
        },
    ]
    
    const counterCard =[
        {
            iconCounter:counterimg1,
            altCounter:'imagecard1',
            text :'Complete Packages For All Your Wishes'
        },
        {
            iconCounter:counterimg2,
            altCounter:'imagecard2',
            text :'Over 30 Years Of Experience'
        },
        {
            iconCounter: counterimg3,
            altCounter:'imagecard3',
            text :'Expert Guides For You'
        },
        {
            iconCounter: counterimg4,
            altCounter:'imagecard4',
            text :'Guaranteed fun at the best price!'
        },
    ]
    const CustomerSay=[
        {
          imgCard: sayimage,
          altimg : 'image slider'  ,
          cardTitle : 'Lyod Gomez' ,
          iconSay : <ImQuotesRight className="cardCustomIcon" />   ,
          text :'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
          iconSay : <ImQuotesRight className="cardCustomIcon" />   ,
        },
        {
          imgCard: sayimage,
          altimg : 'image slider'  ,
          cardTitle : 'Lyod Gomez' ,
          iconSay : <ImQuotesRight className="cardCustomIcon" />   ,
          text :'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
          iconSay : <ImQuotesRight className="cardCustomIcon" />   ,
        },
      ]
      
  
  return (
    <>
     <NavBar logo={logo} altlogo={'logo Travel'} children={<CiMenuBurger  />} items={items} btnDrop={'Eng'}  icon={<FaAngleDown />}  btnLog={'Login'} btnSign={'Sign Up'}  />

     <Hero title={'Our team cares about your full relax'} desc={'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'} about='about' btnSign='View our Tour Packages' />

     <WelcomeCommon about='about' girlimg={imageCity} altimg='city img' subtitle='WELCOME TO OUR SITE!' title='We Are The Center Of Lucca To Offer You The Best' info ='We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!' numbers={welcomeSec} />

    <Counter counter={counterCard} />

    <Explore maintitle={'Happy Customers Says'} left= '&lt;' right= '&gt;' CardsProps={CustomerSay}  CustomerSay='CustomerSay' />

     <Footer footerlogo= {logo} footerimagealt='Footer Image' title1='Services' title2='Home'   title3='Help'   title4='Contacts'  title5='Social Media'  Footeritems1 ={FirstPartFooter} Footeritems2 ={secondPartFooter} Footeritems3 ={thirdPartFooter} Footeritems4 ={fourthPartFooter} Footeritem5 ={fifthPartFooter}  footercontent='Copyright © 2022.  All rights reserved.' />

    </>
  )
}
