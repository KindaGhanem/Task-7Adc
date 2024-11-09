import './DropDown.css'

export default function DropDown({btnDrop , icon ,font}) {
  return (
    <button className={`btndrop ${font ? 'font' : ''}`}>{btnDrop}  {icon} </button>
  )
}