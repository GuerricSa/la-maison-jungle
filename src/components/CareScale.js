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
    let quantity;
    switch (scaleValue) {
        case 1:
          quantity = 'peu';
          break;
        case 2:
          quantity = 'modérement';
          break;
        case 3:
          quantity = 'beaucoup';
          break;
          default:
            quantity = 'valeur inconnue';
      }
    if(careType === 'light') {
      alert(`Cette plante requiert ${quantity} de lumière`)
    } else {
      alert(`Cette plante requiert ${quantity} d'arrosage`)
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
