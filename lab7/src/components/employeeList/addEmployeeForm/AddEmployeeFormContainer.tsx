import React, { useState } from 'react';
import AddEmployeeForm from './AddEmployeeForm';

export interface AddEmployeeProps {
    updateList: () => void;
}

const AddEmployeeFormContainer: React.FC<AddEmployeeProps> = (props: AddEmployeeProps) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleButtonClick = () => {
        setIsFormVisible(!isFormVisible);
    }

    return (
        <>
            {isFormVisible ? (
                <AddEmployeeForm 
                    hideForm={() => setIsFormVisible(false)} 
                    saveEmployee={() => console.log('Saving Employee')}
                />
            ) : (
                <button onClick={handleButtonClick} role='button'>
                    Add employee
                </button>
            )}
        </>
    )
}

export default AddEmployeeFormContainer;
