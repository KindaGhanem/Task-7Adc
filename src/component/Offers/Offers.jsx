import './Offers.css'
import ButtonCommon from '../ButtonCommon/ButtonCommon'
import Image from 'next/image'

export default function Offers({title , desc , btnSign , girlOfferSec , imgalt}) {
  return (
    <>
        <section className='padding-main offer-Sec'>
            <div className='left-part-offer'>
                <h2>{title}</h2>
                <p>{desc}</p>
                <ButtonCommon btnSign={btnSign} contact='contact' />
            </div>
            <Image  className='img-offer' src={girlOfferSec} alt={imgalt} quality={100} />
        </section>


    </>
  )
}
