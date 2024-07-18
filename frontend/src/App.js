
import React from "react";
import {Routes, Route } from "react-router-dom";
import {Editor} from "./components";
const App=() =>{

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Routes>
        <Route path= "/editor/*" element={<Editor/>}/>
      </Routes>
      
    </div>
  )
}

export default App;
