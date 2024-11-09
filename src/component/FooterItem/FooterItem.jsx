import './FooterItem.css'

export default function FooterItem({Footeritems , listsFooter , title , social}) {
  return (

    <div className='FooterItemComp'>
        <h2 className='footerTitle'>{title}</h2>
        <ul className={` ${listsFooter ?'footerlists' : '' } ${social ? 'social' : ''} `}>
            {Footeritems?.map((element , index) => {
                return(
                    <li key={index}>
                        <div className= {`${listsFooter ? 'iconcontactDiv': '' } ${social ? 'iconSocialtDiv' : ''} `}>
                            {element.icon}
                        </div>
                        {element.list}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
