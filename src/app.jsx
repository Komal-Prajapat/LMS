import { useState } from "preact/hooks";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./componet/Home";
import Css from "./Pages/Css";
import Html_nav from "./Pages/html/Html_nav";
import Navbar from "./componet/Navbar";
import CodeEditor from "./componet/CodeEditor";
import Basic from "./Pages/html/Basic";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Basic></Basic> */}
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/html" element={<Html_nav></Html_nav>}></Route>
          <Route path="/codeEditor" element={<CodeEditor></CodeEditor>}></Route>
          <Route path="/css" element={<Css></Css>}></Route>
        </Routes>
      </Router>
    </>
  );
}
