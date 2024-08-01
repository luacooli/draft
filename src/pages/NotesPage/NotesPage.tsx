import { gql, useQuery } from '@apollo/client';
import LinkTo from '../../components/Link/LinkTo';
import './NotesPage.scss'

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

      <LinkTo path="/" text="Back to editor" />
    </>
  )
}

export default NotesPage