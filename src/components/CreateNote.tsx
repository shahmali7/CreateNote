import React, { useRef, useState } from 'react'
import { NoteInterface } from '../model/interface'
import { CreateNoteStyle, DIV, Form, Input,ButtonAdd } from '../styledComp/CreateNote'

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
    <CreateNoteStyle>
        <h2>Create Note</h2>
        <Form onSubmit={(e)=>handleSubmit(e)}>
          <DIV>
            <label>Title</label>
            <Input placeholder='Title ...' type='text' ref={titleRef}/>
          </DIV>
          <DIV>
          <label>Text</label>
            <Input placeholder='Text ...' type='text' ref={textRef}/>
          </DIV>
          <DIV>
          <label>Choose color</label>
            <Input type='color' defaultValue='#ffffff' ref={colorRef}/>
          </DIV>
            <ButtonAdd type='submit' >Submit</ButtonAdd>
        </Form>
    </CreateNoteStyle>
  )
}

export default CreateNote