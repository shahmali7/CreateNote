import React from 'react'
import { NoteInterface } from '../model/interface'


interface iNote {
  note: NoteInterface,
  deleteNote: (id: string) => void
}

const AllNotes:React.FC<iNote> = ({note,deleteNote}) => {

  

  return (
    <div className='Note'>
      <div className='SingleNote' style={{backgroundColor:note.color}}>
           <h3>{note.title}</h3>
           <p>{note.text}</p>
           <span>{note.date}</span>
           <button onClick={()=>deleteNote(note.id)}>Delete</button>
      </div>
    </div>
  )
}

export default AllNotes
