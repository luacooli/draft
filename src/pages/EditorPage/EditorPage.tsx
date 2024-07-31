import { useState } from 'react'
import { gql, useMutation, useQuery } from '@apollo/client';
import { Editor, EditorState } from 'draft-js';
import { Link } from 'wouter';
import './EditorPage.css'
import Button from '../../components/Button/Button';

const SAVE_NOTE_MUTATION = gql`
  mutation SaveNote($content: String!) {
    saveNote(content: $content) {
      id
      content
    }
  }
`;

const GET_NOTES_QUERY = gql`
  query GetNotes {
    notes {
      id
      content
    }
  }
`;

function EditorPage() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

  const [saveNote] = useMutation(SAVE_NOTE_MUTATION)
  const { refetch } = useQuery(GET_NOTES_QUERY)

  const handleChange = (state: EditorState) => {
    setEditorState(state);
  }

  const handleSave = async () => {
    const contentState = editorState.getCurrentContent()
    const content = contentState.getPlainText()

    await saveNote({
      variables: { content },
    });

    // método para re-executar a consulta do Apollo Client para obter dados atualizados
    refetch()

    setEditorState(EditorState.createEmpty())
  };

  return (
    <>
      <h1>Write a Draft</h1>
      <div className="card">
        <Editor
          editorState={editorState}
          onChange={handleChange}
          placeholder="Write something!"
        />

        <br />
        <br />

        <Button text={'Save note'} onClick={handleSave}/>
      </div>

      <Link href='/notes' className="link">See my notes</Link>
    </>
  )
}

export default EditorPage