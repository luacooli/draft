import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/',
  }),
  cache: new InMemoryCache(),
})

export default client

// draft-2
// https://draft-2-dc57e27f3cc0.herokuapp.com/ | https://git.heroku.com/draft-2.git

