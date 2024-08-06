import { useState } from 'react'
import Button from '../../components/Button/Button'
import { getCards, getCardsById } from '../../service/tcgdexService'
import Card from '../../components/Card/Card'
import './Pokemon.scss'
import Navbar from '../../components/Navbar/Navbar'

function Pokemon() {
  const [cards, setCards] = useState([])
  const [searchTerm, setSearchTerm] = useState([])

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

  const handleSearch = async () => {
    try {
      const result = await getCardsById(searchTerm)
      setCards(result)
    } catch (error) {
      console.log('Fail to search by this name', error);
      
    }
  }

  return (
    <>
      <Navbar
        onFilter={handleFilterByLetter}
        onChange={e => setSearchTerm(e.target.value)}
        onSearch={handleSearch}
      />

      <Button text='Load all cards' onClick={handleLoadCards} />

      <div className='cards__container'>
        {cards.map((card: any) => {
          return (
            <Card key={card.id} card={card}/>
          )
        })}
      </div>
    </>
  )
}

export default Pokemon