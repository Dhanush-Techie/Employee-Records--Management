import { useState } from 'react'
import { createContext } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthContext from './context/AuthContext';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvider>
         <AppRoutes></AppRoutes>
      </AuthProvider>     

      
    </>
  )
}

export default App









