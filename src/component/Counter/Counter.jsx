import Image from 'next/image'
import './Counter.css'

export default function Counter({counter}) {
  return (
    <div className='padding-main CounterSec'>
        {counter?.map((element , index) =>{
            return(
                <div key={index} className='cardCounter' >
                    <Image src={element.iconCounter}alt={element.altCounter} />
                    <p>{element.text}</p>
                </div>
            )
        })}
    </div>
  )
}
