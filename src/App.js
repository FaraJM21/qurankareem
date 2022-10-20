import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Layout from "./routes/Layout";
import Surah from "./routes/Surah";
import "./App.scss"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="surah" element={<Surah />}></Route>
        </Route>
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
