import Image from 'next/image'
import './WelcomeCommon.css'

export default function WelcomeCommon({girlimg , altimg , subtitle , about , title , info ,numbers }) {
  return (
    <section className='padding-main sectionWelcome'>
        <Image className={` ${about ?  'cityimg' : 'girlImg' } `} src={girlimg} alt={altimg}></Image>
        <div className='welcome-right-part'>
            <h5>{subtitle}</h5>
            <h2>{title}</h2>
            <p>{info}</p>
            <div className='Allnumberscard'>
                {numbers?.map((element, index) => (
                    <div className='numbercard' key={index}>
                        <div>{element.number}</div>
                        <span>{element.desc}</span>
                    </div>
                    ))}
                
            </div>
        </div>



    </section>
  )
}
