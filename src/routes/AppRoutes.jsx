import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="*" element={<Login />} />
    </Routes>
  )
}
