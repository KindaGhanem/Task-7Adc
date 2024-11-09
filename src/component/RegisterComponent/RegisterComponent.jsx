import Link from 'next/link'
import ButtonCommon from '../ButtonCommon/ButtonCommon'
import MainTitle from '../MainTitle/MainTitle'
import './RegisterComponent.css'

export default function RegisterComponent({maintitle , hide , show , iconExit , label1 , holdername , label2 , holderemail , label3 ,holderpassworld , iconeye , questionForget  ,radiovalue , term ,privacy  ,btnSign , or ,  btngoogle ,icongoogle ,account  ,linkregister ,nonein , noneup }) {
 
  // ${(show) ? 'BG-Register' : 'BG-RegisterVisible'}
 
  return (
    <div className={`${(show) ? 'BG-Register' : 'BG-RegisterVisible'} `}>
      <div className='Register-div'>
        <div className='Register-title'>
          <MainTitle maintitle={maintitle} semibold={'semibold'} />
          <div onClick={() => hide(prev => !prev)} >{iconExit}</div>
        </div>
        <form className='Register-Form'>
          <label className={`${noneup ? 'noneup' : ''}`} >{label1}</label>
          <input type='text' placeholder={holdername} className={` ${noneup ? 'noneup' : ''} `}></input>
          <label>{label2}</label>
          <input type='email' placeholder={holderemail}></input>
          <label>{label3}</label>
          <div className='eye-input' >
          <input type='password' placeholder={holderpassworld}></input>
          {iconeye}
          </div>
          <p className= {`${nonein ? 'nonein' : ''} questionsignin`}>{questionForget}</p>
          </form>
          <div className={`allckeckbox ${noneup ? 'noneup' : ''} `}>
            <input type="checkbox" name='os' value= '1' className='checkbox'  />
            <label>{radiovalue} <span> {term}</span> and <span>{privacy}</span> </label>
          </div>

          <ButtonCommon btnSign={btnSign} width={'width'} />
          <span className='or'>{or}</span>
          <div className='btnicongoogle'>
          {icongoogle}
            <ButtonCommon btnSign={btngoogle} google={'google'} />
          </div>
        <div className='btngoogle'>
          <p>{account}</p>
          <Link href='/'>{linkregister}</Link>
        </div>
      </div> 
    </div>
  )
}
