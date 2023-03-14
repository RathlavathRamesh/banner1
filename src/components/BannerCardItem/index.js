// Write your code here.
import './index.css'

const Technology = props => {
  const {Details} = props
  const {headerText, description, className} = Details
  return (
    <div className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="para">{description}</p>
    </div>
  )
}

export default Technology
