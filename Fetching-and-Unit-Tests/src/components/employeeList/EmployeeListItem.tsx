import React, { useState } from 'react';
import {Employee} from "../../model/Employee";
import { CustomError, deleteEmployee } from '../../logic/api';
import Loader from '../utils/Loader';

export interface EmployeeListItemProps {
    employee: Employee;
    updateList: () => void;
}

const EmployeeListItem: React.FC<EmployeeListItemProps> = (props: EmployeeListItemProps) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            await deleteEmployee(props.employee.id);
            props.updateList();      
        } catch (error) {
            const customError: CustomError = error as CustomError;             
            console.error(`${customError.status} - ${customError.statusText}`);
        }
    };
    
    return (
        <Loader loading={isDeleting} label='Deleting'>
            <p>
                <span>{props.employee.id}.</span>
                <span> - </span>
                <span>{props.employee.name}</span>
                <button onClick={handleDelete}>Delete</button>                
            </p>
        </Loader>
    );
}

export default EmployeeListItem;
