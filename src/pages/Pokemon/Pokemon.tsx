import { useState } from 'react'
import { useQuery } from '@apollo/client'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import { GET_CARDS } from '../../graphql/queries'
import Navbar from '../../components/Navbar/Navbar'
import './Pokemon.scss'

function Pokemon() {
  const [cards, setCards] = useState([])
  const [searchTerm, setSearchTerm] = useState([])
  const { loading, error, data, refetch } = useQuery(GET_CARDS)

  const handleLoadCards = () => {
    if (data) {
      console.log(data);
      setCards(data)
    }
  }

  const handleFilterByLetter = () => {}
  const handleSearch = () => {}

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  
  return (
    <>
      <Navbar
        onFilter={handleFilterByLetter}
        onChange={e => setSearchTerm(e.target.value)}
        onSearch={handleSearch}
      />

      <Button text='Load all cards' onClick={handleLoadCards} />

      <div className='cards__container'>
        {data && data.cards.map((card: any) => {
          return (
            <Card key={card.id} card={card}/>
          )
        })}
      </div>
    </>
  )
}

export default Pokemon