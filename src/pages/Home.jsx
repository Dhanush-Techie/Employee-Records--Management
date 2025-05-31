import React from  'react'
import { EmployeeProvider } from '../context/EmployeeContext'; 
import AddEmployee from '../component/AddEmployee';
const Home = () => {
  return (
    <>
    <EmployeeProvider>
      <AddEmployee />
    </EmployeeProvider>
    </>
  )
}

export default Home