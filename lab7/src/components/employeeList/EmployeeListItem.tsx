import React from 'react';
import {Employee} from "../../model/Employee";

export interface EmployeeListItemProps {
    employee: Employee;
    updateList: () => void;
}

const EmployeeListItem: React.FC<EmployeeListItemProps> = (props: EmployeeListItemProps) => { 
    return (
        <>
            <p>
                <span>{props.employee.id}.</span>
                <span> - </span>
                <span>{props.employee.name}</span>
                <button onClick={() => null}>Delete</button>                
            </p>
        </>
    );
}

export default EmployeeListItem;
