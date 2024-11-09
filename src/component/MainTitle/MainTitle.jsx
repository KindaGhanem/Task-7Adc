import './MainTitle.css'

export default function MainTitle({maintitle , semibold , auto}) {
  return (
    <h1 className={`MainTitle ${semibold ? 'semibold' : '' } ${auto ? 'auto' : ''} `}>{maintitle}</h1>
  )
}
