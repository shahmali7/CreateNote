import React, {useState} from "react";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import NodeList from "./components/NodeList";
import { NoteInterface } from "./model/interface";
import {Container} from './styledComp/Container'
import { GlobalStyles } from "./styledComp/GlobalStyles";
function App() {

  const [notes,setNotes]=useState<NoteInterface[]>([{

    id:(new Date()).toString(),
    title:'coding every day',
    text: 'TypeScript is good for developers',
    color: '#ffffff',
    date: (new Date()).toString()

  }])

  
  return (
    
    <Container >
      <GlobalStyles/>
      <Header/>
      <CreateNote notes={notes} setNotes={setNotes}/>
      <NodeList notes={notes} setNotes={setNotes}/>
    </Container>
 
  );
}

export default App;
