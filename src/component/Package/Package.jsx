import './Package.css'
import MainTitle from '../MainTitle/MainTitle'
import Cards from '../Cards/Cards'

export default function Package({maintitle , CardsProps}) {
  return (
    <section className='padding-main PackageSec'>
        <MainTitle maintitle={maintitle}  />
        <div className='packageCards'>
          <Cards CardsProps={CardsProps} cardPrice='cardPrice' />
        </div>



      
    </section>
  )
}
