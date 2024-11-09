
import NavBar from "@/component/NavBar/NavBar";
import { CiMenuBurger } from "react-icons/ci";
import logo from './../assets/images/logo.png'
import { FaAngleDown } from "react-icons/fa";
import Hero from "@/component/Hero/Hero";
import { FaSearch } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { IoIosPeople } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci"
import { GiGolfFlag } from "react-icons/gi";
import { FaCarRear } from "react-icons/fa6";
import Explore from "@/component/Explore/Explore";
import imgcard1 from './../assets/images/cardimg1.png'
import imgcard2 from './../assets/images/cardimg2.png'
import imgcard3 from './../assets/images/cardimg3.png'
import imgcard4 from './../assets/images/cardimg4.png'
import WelcomeCommon from "@/component/WelcomeCommon/WelcomeCommon";
import girlimg from './../assets/images/girlimg.png'
import Offers from "@/component/Offers/Offers";
import imgoffer from './../assets/images/offerimg.png'
import RegisterComponent from "@/component/RegisterComponent/RegisterComponent";
import { IoClose } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Cards from "@/component/Cards/Cards";
import imgcard5 from './../assets/images/cardimg5.png'
import imgcard6 from './../assets/images/cardimg6.png'
import imgcard7 from './../assets/images/cardimg7.png'
import imgcard8 from './../assets/images/cardimg8.png'
import BookandBike from "@/component/BookandBike/BookandBike";
import bikeimg from './../assets/images/bikepicture.png'
import Package from "@/component/Package/Package";
import imgpackage1 from './../assets/images/packageimg1.png'
import imgpackage2 from './../assets/images/packageimg2.png'
import imgpackage3 from './../assets/images/packageimg3.png'
import imgpackage4 from './../assets/images/packageimg4.png'

import iconlist1 from './../assets/images/icon_oneday1.svg'
import iconlist2 from './../assets/images/icon_map2.svg'
import iconlist3 from './../assets/images/icon_citymap3.svg'
import iconlist4 from './../assets/images/icon_support4.svg'

import iconlist11 from './../assets/images/icon_mountain bike11.svg'
import iconlist22 from './../assets/images/icon_guide22.svg'
import iconlist33 from './../assets/images/icon_water33.svg'

import iconlist111 from './../assets/images/icon_ticket111.svg'
import iconlist222 from './../assets/images/icon_bus222.svg'
import iconlist333 from './../assets/images/icon_companion333.svg'

import iconlist1111 from './../assets/images/icon_driver1111.svg'
import iconlist2222 from './../assets/images/icon_location2222.svg'
import iconlist3333 from './../assets/images/icon_best price3333.svg'


import sayimage from './../assets/images/Ellipse.png'
import { ImQuotesRight } from "react-icons/im";


import { BiSupport } from "react-icons/bi";
import Footer from "@/component/Footer/Footer";


import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


import { CgCalendarDates } from "react-icons/cg";
import { CiTimer } from "react-icons/ci";


export default function Home() {

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
  const HeroCards=[
    {
      iconTitle:<IoIosPeople className="cardiconhero"  />,
      cardtitle : 'Number of people'  ,
      btnDrop : 'Choose number' ,
      icon : <FaAngleDown />
    },
    {
      iconTitle:<SlCalender className="cardiconhero" />,
      cardtitle : 'Date' ,
      btnDrop : 'Choose Date' ,
      icon : <FaAngleDown  />
    },
    {
      iconTitle:<CiClock2 className="cardiconhero" />,
      cardtitle : 'Time' ,
      btnDrop : 'Choose Time' ,
      icon : <FaAngleDown  />
    },
    {
      iconTitle:<GiGolfFlag className="cardiconhero" />,
      cardtitle : 'Tour' ,
      btnDrop : 'Select Tour' ,
      icon : <FaAngleDown  />
    },
    {
      iconTitle:<FaCarRear className="cardiconhero" /> ,
      cardtitle : 'Transportation' ,
      btnDrop : 'Select Transportation' ,
      icon : <FaAngleDown  />
    },
  ]
  const CardsProps=[
    {
      imgCard:imgcard2,
      altimg : 'image slider'  ,
      cardTitle : 'Lucca Bike Tour' ,
      world :'from',
      price :'34 €',
      iconday : <SlCalender className="icondateday"  />,
      day :'EVERY DAY',
      icondate : <IoIosPeople className="icondateday"  />,
      date : '3-10 PP' ,
      text :'A tour of the city and its surroundings led by a professional guide ...',
    },
    {
      imgCard:imgcard1,
      altimg : 'image slider'  ,
      cardTitle : 'Wine tasting In Tuscanyr' ,
      world :'from',
      price :'34 €',
      iconday : <SlCalender className="icondateday" />,
      day :'MONDAY',
      icondate : <IoIosPeople className="icondateday" />,
      date : '10-30 PP' ,
      text :'The real magic is here where you can enjoy the best Tuscan wine and eat ...',
    },
    {
      imgCard:imgcard3,
      altimg : 'image slider'  ,
      cardTitle : 'Cinque Terre Tour' ,
      world :'from',
      price :'34 €',
      iconday : <SlCalender className="icondateday" />,
      day :'TO BE DECIDED',
      icondate : <IoIosPeople className="icondateday" />,
      date : '10-50 PP' ,
      text :'Visiting the 5 Terre is a must, and you can never go there enough ...',
    },
    {
      imgCard:imgcard4,
      altimg : 'image slider'  ,
      cardTitle : 'Siena and Surroundings' ,
      world :'from',
      price :'34 €',
      iconday : <SlCalender className="icondateday" />,
      day :'TO BE DECIDED',
      icondate : <IoIosPeople className="icondateday" />,
      date : '5-10 PP' ,
      text :'Visit the beautiful Siena and the cities that surround it to experience ...',
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

  const TransportCards=[
    {
      imgCard:imgcard5 ,
      altimg :'descimgTransport',
      cardTitle:'Bike and rickshaw rental',
      text:'Book your quality vehicle quickly for an hour or all day!'
    },
    {
      imgCard:imgcard6 ,
      altimg :'descimgTransport',
      cardTitle:'Guided tour of the countryside',
      text:'Live the real Lucchese experience by visiting the suburbs by bike!'
    },
    {
      imgCard:imgcard7 ,
      altimg :'descimgTransport',
      cardTitle:'Taxi and NCC service',
      text:'Do you need not only a bike but also a driver? Then you have found the right place!'
    },
    {
      imgCard:imgcard8 ,
      altimg :'descimgTransport',
      cardTitle:'Bus Package',
      text:'Do you need not only a bike but also a driver? Then you have found the right place!'
    },

  ]

  const packageCard = [
    {
    imgCard:imgpackage1,
    altimg:'imagepackage',
    cardTitle:'BIKE / RICKSHAW',
    Yuro:'€',
    price:'10',
    perday:'/day',
    iconli1:<BiSupport />,
    list : [
      {
        icon:iconlist1 ,
        list:'Your bike for a day'
      } ,
      {
        icon:iconlist2 ,
        list:'City App'
      } ,
      {
        icon:iconlist3 ,
        list:'Discount on Rickshaw'
      } ,
      {
        icon:iconlist4 ,
        list:'Guaranteed Support'
      } ,
    ] ,

    btnSign:'Book Now'

  },
  {
    imgCard:imgpackage2,
    altimg:'imagepackage',
    cardTitle:'BIKE TOURS',
    Yuro:'€',
    price:'30',
    perday:'/day',
    list : [
      {
        icon:iconlist11 ,
        list:'A Mountain Bike Included'
      } ,
      {
        icon:iconlist22 ,
        list:'A Guide For You'
      } ,
      {
        icon:iconlist33 ,
        list:'Bottle of water'
      } ,
      {
        icon:iconlist4 ,
        list:'Guaranteed Support'
      } ,
    ] ,
      btnSign:'Book Now'
  },
    {
    imgCard:imgpackage3,
    altimg:'imagepackage',
    cardTitle:'BUS TRIPS',
    Yuro:'€',
    price:'45',
    perday:'/day',
    list : [
      {
        icon:iconlist111 ,
        list:'Park ticket'
      } ,
      {
        icon:iconlist222 ,
        list:'Return bus'
      } ,
      {
        icon:iconlist333 ,
        list:'Companion'
      } ,
      {
        icon:iconlist4 ,
        list:'Guaranteed Support'
      } ,
    ] ,
    btnSign:'Book Now'
  },
    {
    imgCard:imgpackage4,
    altimg:'imagepackage',
    cardTitle:'TRANSFER',
    Yuro:'€',
    price:'10',
    perday:'/day',

    list : [
      {
        icon:iconlist1111 ,
        list:'Personal Driver'
      } ,
      {
        icon:iconlist2222 ,
        list:'Wherever You Want'
      } ,
      {
        icon:iconlist3333 ,
        list:'At the best price'
      } ,
      {
        icon:iconlist4 ,
        list:'Guaranteed Support'
      } ,
    ] ,
    btnSign:'Book Now'

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



  return (
    <>
      <NavBar logo={logo} altlogo={'logo Travel'} children={<CiMenuBurger  />} items={items} btnDrop={'Eng'}  icon={<FaAngleDown />}  btnLog={'Login'} btnSign={'Sign Up'}  />
      <Hero title={'Enjoy in the best way!'} desc={'Enjoy our services for your trip anytime'} iconworld={<TiWorld />} btn1 = 'Public Tours' iconpeople= {<IoIosPeople />} btn2='Private Tours' HeroCards ={HeroCards} iconSearch={<FaSearch />} />
      <Explore maintitle={'Explore Our Popular Destinantions '} left= '&lt;' right= '&gt;' CardsProps={CardsProps} ExploreCard='ExploreCard' />
      <WelcomeCommon girlimg={girlimg} altimg='girl img' subtitle='WELCOME TO OUR SITE!' title='We are the best company for your visit' info ='After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!' numbers={welcomeSec} />
      <Offers title='Get Special Offers for Organizations' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.' btnSign='Contact Us' girlOfferSec ={imgoffer} imgalt ='imageoffer' />

      <div className="transportSec padding-main">
        <Cards CardsProps={TransportCards} transportnone='transportnone'  />
      </div>

       <BookandBike titleBook ='Book Now Bike' labelname ='Name and Surname' holdername ='Enter your name and surname' labelnumber ='Telephone Number' holdernumber ='Enter your telephone number' labeldate ='Date' holderdate ='Select the date' labelemail ='Email Address' holderemail  ='Enter your email address'  labelservice ='Service Type' holderservice ='Select the service types' labeltime ='Time' holdertime ='Select the time' btnSign ='Book Now' bikeImg ={bikeimg} bikealt='BikeImg'  icondate = {<FaAngleDown className="icon-form-absolute" />} iconservice ={<CgCalendarDates className="icon-form-absolute"  />} icontime={ <CiTimer className="icon-form-absolute"  /> } />
       <Package maintitle='The Most Popular Packages' CardsProps={packageCard}  />

       <Explore maintitle={'Happy Customers Says'} left= '&lt;' right= '&gt;' CardsProps={CustomerSay}  CustomerSay='CustomerSay' />
       <Footer footerlogo= {logo} footerimagealt='Footer Image' title1='Services' title2='Home'   title3='Help'   title4='Contacts'  title5='Social Media'  Footeritems1 ={FirstPartFooter} Footeritems2 ={secondPartFooter} Footeritems3 ={thirdPartFooter} Footeritems4 ={fourthPartFooter} Footeritem5 ={fifthPartFooter}  footercontent='Copyright © 2022.  All rights reserved.' />








    </>
  );
}





















