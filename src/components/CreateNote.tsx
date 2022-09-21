import React, { useRef, useState } from 'react'
import { NoteInterface } from '../model/interface'

interface CreateNoteI{
    notes : NoteInterface[],
    setNotes: React.Dispatch<React.SetStateAction<NoteInterface[]>>
}
const CreateNote:React.FC<CreateNoteI> = ({notes,setNotes}) => {


    const [error,setError] = useState<string>('')
    const titleRef=useRef<HTMLInputElement | null>(null)
    const textRef=useRef<HTMLInputElement | null>(null)
    const colorRef=useRef<HTMLInputElement | null>(null)

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if(titleRef.current?.value === '' && textRef.current?.value === '') {
        return setError('All of the texts are required')
    }
        setError('')
      
      console.log(error);
      

      setNotes([...notes,{
        id:(new Date()).toString(),
        title: titleRef.current?.value,
        text: textRef.current?.value,
        color: colorRef.current?.value,
        date:(new Date()).toString()
      }])
    
    }

  return (
    <div>
        <h2>Create Note</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label>Title</label>
            <input placeholder='Title ...' type='text' ref={titleRef}/>
            <label>Text</label>
            <input placeholder='Text ...' type='text' ref={textRef}/>
            <label>Choose color</label>
            <input type='color' defaultValue='#ffffff' ref={colorRef}/>
            <button type='submit' >Submit</button>
        </form>
    </div>
  )
}

export default CreateNote