import { EmployeeProvider } from '../context/EmployeeContext'; 
import AddEmployee from '../component/AddEmployee';

function App() {
  return (
    <EmployeeProvider>
      <AddEmployee />
    </EmployeeProvider>
  );
}

export default App;
