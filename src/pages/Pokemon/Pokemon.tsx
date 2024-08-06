import { useState } from 'react'
import Button from '../../components/Button/Button'
import { getCards } from '../../service/tcgdexService'
import Card from '../../components/Card/Card'
import './Pokemon.scss'

function Pokemon() {
  const [cards, setCards] = useState([])
  const [searchTerm, setSearchTerm] = useState([])
  const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']

  const handleLoadCards = async () => {
    try {
      const result = await getCards()
      setCards(result);
    } catch (error) {
      console.log('Fail to load cards', error);
    }
  }

  const handleFilterByLetter = async (e) => {
    const letter = e.currentTarget.textContent.toLowerCase()
    const filteredCards = cards.filter(card => card.name.startsWith(letter))

    setCards(filteredCards)
  }

  const handleSearch = async (e) => {
    const term = e.target.value
    console.log(term);
    
    try {
      const result = await getCardsByName(searchTerm)
      setCards(result)
    } catch (error) {
      console.log('Fail to search by this name', error);
      
    }
  }

  return (
    <>
      <nav className='navbar'>
        <div className='filterABC'>
          {abc.map((l) => {
            return (
              <span key={l} onClick={handleFilterByLetter}>{l}</span>
            )
          })}
        </div>
        <div>
          <input type="text" onChange={e => setSearchTerm(e.target.value)} />
          <button onClick={handleSearch}>buscar</button>
        </div>
      </nav>
      <Button text='Load all cards' onClick={handleLoadCards} />

      <div className='cards__container'>
        {cards.map((card: any) => {
          return (
            <Card card={card}/>
          )
        })}
      </div>
    </>
  )
}

export default Pokemon