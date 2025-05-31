import { useState } from 'react'
import { createContext } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthContext from './context/AuthContext';
import { AuthProvider } from './context/AuthContext';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <AuthProvider>
    </AuthProvider> */}
    <AuthContext.Provider>
      {/* <Login /> */}
       <Signup></Signup>/
    </AuthContext.Provider>
         

      
    </>
  )
}

export default App









