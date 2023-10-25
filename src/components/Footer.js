import { useState } from 'react'
import '../styles/Footer.css'

function blur(inputValue) {
  if (!inputValue.includes("@")) {
    alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
  }
}

function Footer() {
  const [inputValue, setInputValue] = useState('');
  return(
    <footer className='lmj-footer'>
      <div>
        Pour les passionnés de plantes 🌱
      </div>
      <div className='lmj-footer-elem'>Laissez-nous votre mail</div>
      <input
        placeholder='Entrez votre mail'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={() => blur(inputValue)}
      />
    </footer>
  )
}

export default Footer;
