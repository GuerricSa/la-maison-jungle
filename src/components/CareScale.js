const quantityLabel = {
  1: 'peu',
  2: 'modérément',
  3: 'beaucoup'
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]

	const scaleType = () => {
		if (careType === 'light') {
      return('☀️')
    } else {
      return('💧')
    }
  }

  function handleClick(scaleValue, careType) {
    if(careType === 'light') {
      alert(`Cette plante requiert ${quantityLabel[scaleValue]} de lumière`)
    } else {
      alert(`Cette plante requiert ${quantityLabel[scaleValue]} d'arrosage`)
    }
  }

	return (
		<div onClick={() => handleClick(scaleValue, careType)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType()}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
