import { Employee } from "../model/Employee";
import { Key } from "react";

const BASE_URL = 'http://localhost:3001';

export interface CustomError extends Error {
    status?: number;
    statusText?: string;
}

export const getEmployees: () => Promise<Employee[]> = async () => {
    try {
        const response = await fetch(`${BASE_URL}/employees`);

        if (response.ok) {
            const data = await response.json();
            return data as Employee[];
        } else {
            const error: CustomError = new Error(`HTTP error! Status: ${response.status}`);
            error.status = 500;
            error.statusText = 'Internal Server Error';
            throw error;
        }
    } catch (error) {
        const customError: CustomError = error as CustomError;
        customError.status = 500;
        customError.statusText = 'Internal Server Error';
        throw customError;
    }
};

export const addEmployee = async (employee: Employee) => {

}

export const deleteEmployee = async (employeeId: Key) => {
}