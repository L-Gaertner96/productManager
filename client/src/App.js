import React from "react";
import axios from "axios";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './views/Main'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element = {<Main/>} path="/home" default />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
