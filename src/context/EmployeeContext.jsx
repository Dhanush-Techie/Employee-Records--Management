import { createContext, useState, useEffect } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(stored);
  }, []);

  const addEmployee = (emp) => {
    const updated = [...employees, { ...emp, id: Date.now() }];
    localStorage.setItem("employees", JSON.stringify(updated));
    setEmployees(updated);
  };

  const updateEmployee = (index, data) => {
    const updated = [...employees];
    updated[index] = data;
    localStorage.setItem("employees", JSON.stringify(updated));
    setEmployees(updated);
  };

  const deleteEmployee = (index) => {
    const updated = [...employees];
    updated.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(updated));
    setEmployees(updated);
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, updateEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
