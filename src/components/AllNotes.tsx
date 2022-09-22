import React from 'react'
import { NoteInterface } from '../model/interface'
import {NoteStyle,SingleNote,Button} from '../styledComp/NoteStyles'
import {ThemeProvider} from 'styled-components'
interface iNote {
  note: NoteInterface,
  deleteNote: (id: string) => void
}

const AllNotes:React.FC<iNote> = ({note,deleteNote}) => {
  const theme={
    backGroundColor:note.color
  }
  return (
    <ThemeProvider theme={theme}>
      <NoteStyle className='Note'>
        <SingleNote  >
             <h3>{note.title}</h3>
             <p>{note.text}</p>
             <span>{note.date}</span>
             <Button onClick={()=>deleteNote(note.id)}>Delete</Button>
        </SingleNote>
      </NoteStyle>
    </ThemeProvider>
  )
}

export default AllNotes
