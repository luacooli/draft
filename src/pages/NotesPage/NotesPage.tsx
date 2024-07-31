import { gql, useQuery } from '@apollo/client';
import { Link } from 'wouter';
import './NotesPage.css'

const GET_NOTES_QUERY = gql`
  query GetNotes {
    notes {
      id
      content
    }
  }
`;

function NotesPage() {
  const { data } = useQuery(GET_NOTES_QUERY)

  return (
    <>
      <h2>Saved Notes</h2>
      {data?.notes.map((note: { id: string; content: string }) => (
        <p key={note.id}>{note.content}</p>
      ))}

      <Link href='/'>Back to editor</Link>
    </>
  )
}

export default NotesPage