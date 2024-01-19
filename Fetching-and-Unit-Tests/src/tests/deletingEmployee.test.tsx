// noinspection DuplicatedCode
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import EmployeeList from "../components/employeeList/EmployeeList";
import React from "react";
import { setupServer } from "msw/node";
import { rest } from "msw";

const noAction = () => {};

//region server mock
const server = setupServer(
    rest.get('*/employees', async (request, response, ctx) => {
        await new Promise(resolve => setTimeout(resolve, 150));
        return response(ctx.json([
        {
            id: 'employee-1',
            name: 'John Doe',
            isActive: true,
        },
        {
            id: 'employee-2',
            name: 'Jane Doe',
            isActive: true,
        },
        ]));
    }),
    rest.delete('*/employees/:id', async (request, response, ctx) => {
        await new Promise(resolve => setTimeout(resolve, 150));
        return response(ctx.json(request.params));
    })
);
//endregion

beforeAll(() => server.listen());
afterEach(() => {
    server.resetHandlers();
    jest.clearAllMocks();
});
afterAll(() => server.close());

//region method mocks
jest.spyOn(console, 'error');
//endregion

describe('EmployeeList delete test', () => {
test('EmployeeList should show "Deleting..." label when delete button is clicked', async () => {
    render(<EmployeeList />);
    
    await waitFor(() => {
        expect(screen.queryByText("Loading...")).toBeFalsy();
    });

    fireEvent.click(screen.getAllByRole('button', { name: 'Delete' })[0]);

    await waitFor(() => {
        expect(screen.getByText("Deleting...")).toBeTruthy();
    });
});

test('EmployeeList should show the list again after deleting an employee', async () => {
    render(<EmployeeList />);

    await waitFor(() => {
        expect(screen.queryByText("Loading...")).toBeFalsy();
    });

    fireEvent.click(screen.getAllByRole('button', { name: 'Delete' })[0]);

    await waitFor(() => {
        expect(screen.queryByText("Deleting...")).toBeFalsy();
        expect(screen.getByText('John Doe')).toBeTruthy();
        expect(screen.getByText('Jane Doe')).toBeTruthy();
    }, { timeout: 5000 });
});
});