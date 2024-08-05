import { Route } from 'wouter';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import EditorPage from './pages/EditorPage/EditorPage';
import NotesPage from './pages/NotesPage/NotesPage';
import Pokemon from './pages/Pokemon/Pokemon';
import './App.scss';

function App() {

  return (
    <>
      <ApolloProvider client={client}>
        <Route path="/" component={EditorPage} />
        <Route path="/notes" component={NotesPage} />
        <Route path="/pokemon" component={Pokemon} />
      </ApolloProvider>
    </>
  )
}

export default App
