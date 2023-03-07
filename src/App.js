import React from "react";
import Welcome from "./componets/Welcome";
import {Nav} from "./componets/Nav";
import {Route, Routes} from "react-router-dom"
import { Info } from "./componets/Info"
function App() {
  return (
    <>
    <Routes>
      <Route path="/"/>
      <Route path="Info" element={<Info />}/>
    </Routes>
    <Nav />
    <Welcome />
    </>
    
  );
}

export default App;
