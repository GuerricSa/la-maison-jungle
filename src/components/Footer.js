import { useState } from 'react'

function blur(inputValue) {
  if (inputValue.indexOf("@") === -1) {
    alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
  }
}

function Footer() {
  const [inputValue, setInputValue] = useState('Entrez votre mail');
  return(
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={() => blur(inputValue)}
      />
    </div>
  )
}

export default Footer;
