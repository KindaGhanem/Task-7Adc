import './ButtonCommon.css'

export default function ButtonCommon({btnSign , width ,google ,contact ,price , herobtn , onClick }) {
  return (
    <button onClick={onClick} className={` ${width ? 'width' : ''} ${google ? 'google' : ''} ${contact ? 'contact' : ''} ${price ? 'price' : ''} ${herobtn ? 'herobtn' : ''} btn3`}>{btnSign}</button>
  )
}
