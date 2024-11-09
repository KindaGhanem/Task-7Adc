'use client'

import './Explore.css'
import MainTitle from '../MainTitle/MainTitle'
import Cards from '../Cards/Cards'
import {  useState } from 'react'

export default function Explore({maintitle , left , right ,CardsProps , ExploreCard , CustomerSay}) {

    const [id, setId] = useState(1);

    const [activeButton, setActiveButton] = useState('');


    const nextSlide = () => {
        setId((prevId) => (prevId === 3 ? 1 : prevId + 1));
        setActiveButton('right');
    };

    const prevSlide = () => {
        setId((prevId) => (prevId === 1 ? 3 : prevId - 1)); 
        setActiveButton('left');
    };
    

  return (
    <section className='padding-main'>
        <div className='top-slider-explore'>
            <MainTitle maintitle={maintitle} />
            <div className='leftrighticon'>
                <button onClick={prevSlide} className={activeButton === 'left' ? 'activebtn' : ''}>{left}</button>
                <button onClick={nextSlide}  className={activeButton === 'right' ? 'activebtn' : ''}>{right}</button>
            </div>
        </div>
        <div className={`AllCards ${ExploreCard ? 'blockCard' : ''} ${CustomerSay ? 'noneCard' : ''} `}>
            <div className={`container${id}`}>
                <div className='child'>
                    <Cards CardsProps={CardsProps} Explore='Explore' />
                </div>
                <div className='child'>
                    <Cards CardsProps={CardsProps} Explore='Explore' />
                </div>
                <div className='child'>
                    <Cards CardsProps={CardsProps} Explore='Explore' />
                </div>
            </div>
        </div>
        <div className={`AllCards ${ExploreCard ? 'noneCard' : ''} ${CustomerSay ? 'blockCard' : ''} `}>
            <div className={`container${id}`}>
                <div className='child'>
                    <Cards CardsProps={CardsProps} customerSay='customerSay' />
                </div>
                <div className='child'>
                    <Cards CardsProps={CardsProps} customerSay='customerSay' />
                </div>
                <div className='child'>
                    <Cards CardsProps={CardsProps} customerSay='customerSay' />
                </div>
            </div>
        </div>


      
    </section>
  )
}
