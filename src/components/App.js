import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import { AuthProvider } from "../contexts/AuthContext"
import Chats from "./Chats"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chats" element={<Chats />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
