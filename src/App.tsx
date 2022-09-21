import React, {useState} from "react";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import NodeList from "./components/NodeList";
import { NoteInterface } from "./model/interface";
import './styles/App.css'

function App() {

  const [notes,setNotes]=useState<NoteInterface[]>([{

    id:(new Date()).toString(),
    title:'coding every day',
    text: 'TypeScript is good for developers',
    color: '#ffffff',
    date: (new Date()).toString()

  }])


  return (
    <div className="App">
      <Header/>
      <NodeList notes={notes} setNotes={setNotes}/>
      <CreateNote notes={notes} setNotes={setNotes}/>
    </div>
  );
}

export default App;
