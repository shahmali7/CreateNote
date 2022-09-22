import React from 'react'
import {NoteInterface} from '../model/interface'
import AllNotes from './AllNotes'
import {NodeListStyle} from '../styledComp/NodeListStyle'
interface NodeListI {
    notes : NoteInterface[],
    setNotes: React.Dispatch<React.SetStateAction<NoteInterface[]>>
}

const NodeList: React.FC<NodeListI> = ({notes,setNotes}) => {
  const deleteNote=(id:string)=>{
    setNotes(notes.filter(note=>note.id !== id))
  }
  return (
    <NodeListStyle>
        {notes.map(note=><AllNotes key={note.id} note={note} deleteNote={deleteNote} />)}
    </NodeListStyle>
  )
}

export default NodeList