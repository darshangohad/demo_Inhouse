import React from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import { createContext, useEffect, useState } from "react";
import { Home } from "../src/components/scripts/Home";
import { Notice } from "./components/scripts/Notice";
import { Internship } from "./components/scripts/Internship";
import { Placement } from "./components/scripts/Placement";


export const userContext=createContext({})

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/placement" element={<Placement />} />

      </Routes>

    </BrowserRouter>

  )
}

export default App