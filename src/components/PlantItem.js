import CareScale from './CareScale';
import '../styles/PlantItem.css'

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName} Très bon choix.`)
}

const PlantItem = ({ id, name, cover, water, light}) => {
  return (
    <li className='lmj-plant-item' style={{backgroundImage: `url(${cover})`}} onClick={() => handleClick(name)}>
      {name}
      <div>
        <CareScale careType='light' scaleValue={light} />
        <CareScale careType='water' scaleValue={water} />
      </div>
    </li>
  )
}

export default PlantItem;
