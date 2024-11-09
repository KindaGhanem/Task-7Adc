import Image from 'next/image'
import './Cards.css'
import ButtonCommon from '../ButtonCommon/ButtonCommon'

export default function Cards({CardsProps , transportnone , cardPrice ,Explore , customerSay , iconSayQuote}) {
  return (
    <>
        {CardsProps?.map((element, index) => {
            return(
                <div className={`CardsCommon ${cardPrice ? 'cardPricewidth' :''} ${customerSay ? 'cardCustomerSay' :''} `} key={index}>
                    <Image className='mainimg' src={element.imgCard} alt={element.altimg}></Image>
                    <h2 className={`${transportnone ? 'margin' : ''} ${cardPrice ? 'cardPricefont' :''} ${customerSay ? 'cardCustomTitle' :''}  `} >{element.cardTitle}</h2>
                    <span className= {`${transportnone ? 'transportnone' : ''}   ${cardPrice ? 'cardPricenone' :''} ${customerSay ? 'transportnone' : ''} `} > {element.world} <span className='price'>{element.price}</span></span>
                    <div className={`Carddateday ${transportnone ? 'transportnone' : ''} ${cardPrice ? 'cardPricenone' :''} ${customerSay ? 'transportnone' :''}  `}>
                        <div>{element.iconday} {element.day}</div> 
                        <div>{element.icondate} {element.date}</div> 
                    </div>

                    <div className={` ${transportnone ? 'transportnone' : ''} ${cardPrice ? 'cardPricenone' :''} ${Explore ? 'Explorenone' : ''}  `} > {iconSayQuote} </div>

                    <p className={`par1 ${cardPrice ? 'cardPricenone' :''} ${customerSay ? 'cardCustomtext' :''} `}>{element.text}</p>

                    <div className={` ${transportnone ? 'transportnone' : ''} ${cardPrice ? 'cardPricenone' :''} ${Explore ? 'Explorenone' : ''}  `}  > {iconSayQuote} </div>

                    
                    <p className={` par2 ${Explore ? 'Explorenone' : ''}  ${transportnone ? 'transportnone' : ''} ${customerSay ? 'transportnone' :''}`}>
                        <span className='span1'>{element.Yuro}</span>
                         {element.price} 
                         <span className='span2'>{element.perday}</span>
                    </p>
                    <ul className={` ${transportnone ? 'transportnone' : ''} ${Explore ? 'Explorenone' : ''} ${customerSay ? 'transportnone' :''} `}>
                        {element.list?.map ((e , index) => {
                                return(
                                <li key={index}>
                                    <Image src={e.icon} alt=''></Image>
                                    {e.list}
                                </li>)
                        })}
                    </ul>
                    <div className={` ${transportnone ? 'transportnone' : ''} ${Explore ? 'Explorenone' : ''} ${customerSay ? 'transportnone' :''}`} >
                        <ButtonCommon btnSign={element.btnSign} price='price' />
                    </div>

                    
                </div>
            )
        })}
    </>
  )
}


// {imgCard , altimg , cardTitle , world , price , iconday , day , icondate , date , text}

