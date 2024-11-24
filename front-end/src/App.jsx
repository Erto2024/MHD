import React from "react";
import {HashRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Result from "./Pages/Result";
import Layout from "./Layout";


function App () {
  return <>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/Result" element={<Result />}/>
        </Route>
      </Routes>
    </Router>
  </>
}

export default App