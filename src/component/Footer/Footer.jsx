import './Footer.css'
import FooterItem from '../FooterItem/FooterItem'
import Image from 'next/image'

export default function Footer({footerlogo , footerimagealt, Footeritems1 ,Footeritems2 , Footeritems3 , Footeritems4 , Footeritem5 , title1 , title2 , title3 , title4 , title5 , footercontent }) {
  return (
    <div className='footer padding-main'>
        <Image src={footerlogo} alt={footerimagealt} />
        <div className='AllListsFooter'>
            <FooterItem Footeritems={Footeritems1}  title={title1} listsFooter='listsFooter'  />
            <FooterItem Footeritems={Footeritems2} title={title2} listsFooter='listsFooter'  />
            <FooterItem Footeritems={Footeritems3}  title={title3} listsFooter='listsFooter'  />
            <FooterItem Footeritems={Footeritems4}  title={title4} listsFooter='listsFooter'  />
            <FooterItem Footeritems={Footeritem5}  title={title5} social='social' />
        </div>
        <p className='footercopy'>{footercontent}</p>
      
    </div>
  )
}
