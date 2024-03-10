import React from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import { createContext, useEffect, useState } from "react";

export const userContext=createContext({})

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App