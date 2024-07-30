import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/',
  }),
  cache: new InMemoryCache(),
})

export default client

// nameless-cliffs-09576
// https://nameless-cliffs-09576-3f7c2702c624.herokuapp.com/ | https://git.heroku.com/nameless-cliffs-09576.git

