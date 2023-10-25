import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem';
import Categories from './Categories';
import { useState } from 'react';

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

  function addToCart(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name);
    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      )
      updateCart([
        ...cartFilteredCurrentPlant,
        {name, price, amount: currentPlantAdded.amount +1}
      ])
    } else {
      updateCart([
        ...cart,
        {name, price, amount: 1}
      ])
    }
  }

  const filteredPlantList = !activeCategory ? plantList : plantList.filter((plant) => plant.category === activeCategory);

	return (
		<div className='lmj-shopping-list'>
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
			<ul className='lmj-plant-list'>
				{filteredPlantList.map((plant) => (
            <div key={plant.id}>
              <PlantItem
                name={plant.name}
                cover={plant.cover}
                water={plant.water}
                light={plant.light}
                price={plant.price}
                key={plant.id}
              />
              <button
                onClick={() => addToCart(plant.name, plant.price)}
              >
                Ajouter
              </button>
            </div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
