import './index.css'

const Banners = props => {
  const {bannerCards, key} = props
  const {headerText, description, className} = bannerCards
  console.log(key)

  return (
    <li className={`banners-list ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Banners
