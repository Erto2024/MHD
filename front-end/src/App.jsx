import React from "react";
import {HashRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Result from "./Pages/Result";


function App () {
  return <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Result" element={<Result />}/>
      </Routes>
    </Router>
  </>
}

export default App