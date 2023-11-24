import React, { useEffect, useState } from 'react';
import { CustomError, getEmployees } from '../../logic/api';
import Loader from '../utils/Loader';
import EmployeeListItem from './EmployeeListItem';
import { Employee } from '../../model/Employee';
import AddEmployeeFormContainer from './addEmployeeForm/AddEmployeeFormContainer';

const EmployeeList: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [loaderLabel, setLoaderLabel] = useState<string>();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [error, setError] = useState<CustomError | null>(null);

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

  useEffect(() => {
    fetchData();
  }, []);

  const updateList = async () => {
    setLoading(true);
    await fetchData();
  };

  return (
    <Loader loading={loading} label={loaderLabel}>
      {error ? (
        <>
          <h1>Employee list</h1>
          <button>Add employee</button>
        </>
      ) : (
        <>
          <h1>Employee list</h1>
          {employees.map((employee) => (
            <EmployeeListItem key={employee.id} employee={employee} updateList={() => {}} />
          ))}
          <AddEmployeeFormContainer updateList={updateList}/>          
        </>
      )}
    </Loader>
  );
};

export default EmployeeList;
