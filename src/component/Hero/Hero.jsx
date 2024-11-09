import React from 'react'
import DropDown from '../DropDown/DropDown'
import './Hero.css'
import ButtonCommon from '../ButtonCommon/ButtonCommon'

export default function Hero({title , desc , iconworld , btnSign , btn1 , iconpeople , btn2 , HeroCards , iconSearch , about}) {

  return (
    <div className={`Hero  padding-main ${about ? 'HeroAbout' : 'HeroHome'} `}>

        <h1>{title}</h1>
        <p className= {`${about ? 'ParHeroAbout' : ''}`}>{desc}</p>

        <div className={`Hero-Tabs ${about ? 'noneabout' : ''}`}>
            <div className='Hero-btns'>
                <button className='Hero-btns1 ' > {iconworld} {btn1} </button>
                <button className='Hero-btns2'> {iconpeople} {btn2} </button>
            </div>
            <div className='HeroCard'>
                {HeroCards?.map((element, index) => (
                    <div key={index} className='HeroCardInfo'>
                        {element.iconTitle}
                        <div className='HeroCardDesc'>
                            <h5>{element.cardtitle} </h5>
                            <DropDown btnDrop={element.btnDrop} icon={element.icon} font={'font'} />
                        </div>
                    </div>
                ))}
                <button className='searchbtn'>{iconSearch}</button>
            </div>
        </div>
        <div className={`${about ? 'blockabout' : 'noneabout'}`}>
            <ButtonCommon btnSign={btnSign} herobtn='herobtn'  />
        </div>


</div>

  )
}
