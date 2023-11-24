import React, { useState } from 'react';
import { Employee } from "../../../model/Employee";
import { generateKey } from '../../../utils/generateKey';
import Loader from '../../utils/Loader';
import { act } from 'react-dom/test-utils';

export interface AddEmployeeFormProps {
    saveEmployee: (employee: Employee) => void;
    hideForm: () => void;
}

const AddEmployeeForm: React.FC<AddEmployeeFormProps> = (props: AddEmployeeFormProps) => {
  const [name, setName] = useState<string>('');
  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSave = async () => {
    const employee: Employee = {
      id: generateKey(),
      name: name,
      isActive: true,
    };

    try {
      setIsSaving(true);
      await props.saveEmployee(employee);
    } catch (error) {
      console.error('Error saving employee:', error);
    } finally {
      act(() => {
        setIsSaving(false);
        setName('');
      })
      props.hideForm();
    }
  };

  return (
    <Loader loading={isSaving} label='Saving'>
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
    </Loader>
  );
};

export default AddEmployeeForm;
