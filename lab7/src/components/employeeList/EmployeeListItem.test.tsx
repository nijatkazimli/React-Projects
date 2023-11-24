// noinspection DuplicatedCode

import React from "react";
import {screen, render, fireEvent, waitFor} from "@testing-library/react";
import EmployeeListItem from "./EmployeeListItem";
import {Employee} from "../../model/Employee";

/*
getBy - finds or throws error - for standard use
queryBy - finds or returns null - used to verify that something is not there
findBy - async, finds or throws
*/

const employee: Employee = {
    id: 'super-cool-id',
    name: 'Bob Marley',
    isActive: true
};
const noop = () => {}

describe('EmployeeListItem data visualization test', () => {
    test('Component shows name of the employee', () => {

        render(<EmployeeListItem employee={employee} updateList={noop}/>)

        expect(screen.getByText('Bob Marley')).toBeTruthy()
    })

    test('Component shows delete button', () => {
        render(<EmployeeListItem employee={employee} updateList={noop}/>);
        expect(screen.getByRole('button', { name: 'Delete' })).toBeTruthy();
    });    
})

describe('EmployeeListItem test test', () => {
    test('Component should hide employee details while deleting', () => {
        render(<EmployeeListItem employee={employee} updateList={noop}/>);
        fireEvent.click(screen.getByRole('button'));
        expect(screen.queryByText('Bob Marley')).toBeNull();
    })
})
