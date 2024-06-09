import { useState } from 'react'
import './App.css'
import {Typography} from "@mui/material";
import Checker from "./components/Checker.tsx";

function App() {
  return (
    <>
        <div>
            <Typography variant="h1">
                Password Strength Checker
            </Typography>
            <h2>
                Please enter your password in the below box
            </h2>
        </div>
      <div className="password-strength-checker-container">
        <Checker />
      </div>
      <p className="read-the-docs">
        This website will not 'eat' your information!
      </p>
    </>
  )
}

export default App
