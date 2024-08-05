import TCGdex from '@tcgdex/sdk'

// Instantiate the SDK
const tcgdex = new TCGdex('en')

// go into an async context
export const getCards = async () => {
  try {
    const cards = await tcgdex.fetch('cards');
    return cards
  } catch (error) {
    console.log('Fail to load cards', error);
    throw new Error(error)
  }
}

export const getCardsByName = async (term: string) => {
  try {
    const cards = await tcgdex.fetch('cards', term)
    return cards
  } catch (error) {
    console.log('Fail to load by this letter', error);
    throw new Error(error)
  }
}
