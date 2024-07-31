import { Route } from 'wouter';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import NotesPage from './pages/NotesPage/NotesPage';
import EditorPage from './pages/EditorPage/EditorPage';
import './App.css';

function App() {

  return (
    <>
      <ApolloProvider client={client}>
        <Route path="/" component={EditorPage} />
        <Route path="/notes" component={NotesPage} />
      </ApolloProvider>
    </>
  )
}

export default App
