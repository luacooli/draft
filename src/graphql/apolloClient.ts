import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.tcgdex.net/v2/graphql',
  }),
  cache: new InMemoryCache(),
})

const queryParams = setContext((_, headers) => {
  const params = {
    'pagination:page': 1,
    'pagination:itemsPerPage': 5 
  }

  const queryParams = new URLSearchParams(params).toString()

  return {
    headers: {
      ...headers
    }
  }
})

export default client

