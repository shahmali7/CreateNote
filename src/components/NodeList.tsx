import React from 'react'
import {NoteInterface} from '../model/interface'
import AllNotes from './AllNotes'
interface NodeListI {
    notes : NoteInterface[],
    setNotes: React.Dispatch<React.SetStateAction<NoteInterface[]>>
}

const NodeList: React.FC<NodeListI> = ({notes,setNotes}) => {
  const deleteNote=(id:string)=>{
    setNotes(notes.filter(note=>note.id !== id))
  }
  return (
    <div>
        <div>{notes.map(note=><AllNotes key={note.id} note={note} deleteNote={deleteNote} />)}</div>
    </div>
  )
}

export default NodeList