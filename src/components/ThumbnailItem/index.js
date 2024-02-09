// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, setActiveThumnailId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const isActiveEl = isActive ? 'btnel_clear' : null

  const imageChange = () => {
    setActiveThumnailId(id)
  }
  return (
    <li>
      <button className="btnEl" type="button">
        <img
          src={`${thumbnailUrl}`}
          className={`image ${isActiveEl}`}
          alt={`${thumbnailAltText}`}
          onClick={imageChange}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
