import CareScale from './CareScale';
import '../styles/PlantItem.css'

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName} Très bon choix.`)
}

const PlantItem = ({ name, cover, water, light}) => {
  return (
    <li className='lmj-plant-item' onClick={() => handleClick(name)}>
      <div className='lmj-plant-item-img'style={{backgroundImage: `url(${cover})`}} />
      {name}
      <div>
        <CareScale careType='light' scaleValue={light} />
        <CareScale careType='water' scaleValue={water} />
      </div>
    </li>
  )
}

export default PlantItem;
