import React, { useEffect, useState } from 'react';
import { CustomError, getEmployees } from '../../logic/api';
import Loader from '../utils/Loader';
import EmployeeListItem from './EmployeeListItem'; // Import the EmployeeListItem component
import { Employee } from '../../model/Employee';

const EmployeeList: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [error, setError] = useState<CustomError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (error) {
        const customError: CustomError = error as CustomError;        
        setError(customError);
        console.error(`${customError.status} - ${customError.statusText}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Loader loading={loading}>
      {error ? (
        <>
          <h1>Employee list</h1>
          <button>Add employee</button>
        </>
      ) : (
        <>
          <h1>Employee list</h1>
          <button>Add employee</button>
          {employees.map((employee) => (
            <EmployeeListItem key={employee.id} employee={employee} updateList={() => {}} />
          ))}
        </>
      )}
    </Loader>
  );
};

export default EmployeeList;
