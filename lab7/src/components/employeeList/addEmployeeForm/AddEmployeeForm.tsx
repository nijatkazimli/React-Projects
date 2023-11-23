import React, { useState } from 'react';
import {Employee} from "../../../model/Employee";
import { generateKey } from '../../../utils/generateKey';

export interface AddEmployeeFormProps {
    saveEmployee: (employee: Employee) => void;
    hideForm: () => void;
}

const AddEmployeeForm: React.FC<AddEmployeeFormProps> = (props: AddEmployeeFormProps) => {
    const [name, setName] = useState<string>('');
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };
  
    const handleSave = () => {
        const employee: Employee = {
          id: generateKey(),
          name: name,
          isActive: true,
        };
        props.saveEmployee(employee);
        setName('');
        props.hideForm();
    };
  
    return (
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={props.hideForm}>
          Cancel
        </button>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    );
  };

export default AddEmployeeForm;
