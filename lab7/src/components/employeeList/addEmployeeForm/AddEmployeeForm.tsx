import React from 'react';
import {Employee} from "../../../model/Employee";

export interface AddEmployeeFormProps {
    saveEmployee: (employee: Employee) => void;
    hideForm: () => void;
}

const AddEmployeeForm: React.FC<AddEmployeeFormProps> = (props: AddEmployeeFormProps) => {
    return (
        <></>
    )
}

export default AddEmployeeForm;
