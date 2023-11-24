import React, { useState } from 'react';
import AddEmployeeForm, { AddEmployeeFormProps } from './AddEmployeeForm';
import { CustomError, addEmployee } from '../../../logic/api';
import { Employee } from '../../../model/Employee';

export interface AddEmployeeProps {
    updateList: () => void;
}

const AddEmployeeFormContainer: React.FC<AddEmployeeProps> = (props: AddEmployeeProps) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleButtonClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  const saveEmployee = async (employee: Employee) => {
    try {
      await addEmployee(employee);
      props.updateList();      
    } catch (error) {
      const customError: CustomError = error as CustomError;             
      console.error(`${customError.status} - ${customError.statusText}`);
    }
  };

  const addEmployeeFormProps: AddEmployeeFormProps = {
    saveEmployee: saveEmployee,
    hideForm: () => setIsFormVisible(false),
  };

  return (
    <>
      {isFormVisible ? (
        <AddEmployeeForm {...addEmployeeFormProps} />
      ) : (
        <button onClick={handleButtonClick} role="button">
          Add employee
        </button>
      )}
    </>
  );
};

export default AddEmployeeFormContainer;
