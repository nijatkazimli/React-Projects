/* eslint-disable jest/no-conditional-expect */
import {rest} from 'msw'
import {setupServer} from "msw/node";
import {getEmployees, addEmployee} from "./api";

//region server mock
const server = setupServer(
    rest.get('*/employees', (request, response, ctx) => {
        return response(ctx.json([
                {
                    "id": "5dc9bdc63d2a39982fbf83d8",
                    "isActive": true,
                    "name": "Bates Parker"
                },
                {
                    "id": "5dc9bdc6f0c10cec4f579a65",
                    "isActive": false,
                    "name": "Hobbs Sullivan"
                },
                {
                    "id": "5dc9bdc6cd6f618976e00dfa",
                    "isActive": true,
                    "name": "Alisha Stephenson"
                }
            ]
        ));
    })
);
//endregion

beforeAll(() => server.listen());
afterEach(() => {
    server.resetHandlers();
});
afterAll(() => server.close());

describe('employees fetching tests', () => {
    test('fetching should return a valid array of objects', async () => {
        const employees = await getEmployees();

        expect(employees).toBeInstanceOf(Array);
        expect(employees).toHaveLength(3);
    });

    test('fetching should correctly parse returned json', async () => {
        const employees = await getEmployees();

        expect(employees[0].id).toBe('5dc9bdc63d2a39982fbf83d8');
        expect(employees[1].id).toBe('5dc9bdc6f0c10cec4f579a65');
        expect(employees[2].id).toBe('5dc9bdc6cd6f618976e00dfa');
    });

    test('fetching should throw in case of error', async () => {
        server.use(
            rest.get('*/employees', (request, response, ctx) => {
                return response(
                    ctx.status(500),
                    ctx.json({
                        errorCode: 1,
                        errorMessage: 'Internal error',
                    })
                )
            })
        );

        try {
            await getEmployees();

            // walkaround - validation that getEmployees did throw an error.
            // necessary due to error in jest documentation
            expect(true).toBeFalsy();
        }
        catch (e){
            expect((e as Response).status).toBe(500);
            expect((e as Response).ok).toBeFalsy();
            expect((e as Response).statusText).toBe('Internal Server Error');
        }
    })
})

describe('employee adding tests', () => {
    test('adding should throw in case of error', async () => {
        server.use(
            rest.post('*/employees', (request, response, ctx) => {
            return response(
                ctx.status(500),
                ctx.json({
                errorCode: 1,
                errorMessage: 'Internal error',
                })
            );
            })
        );
    
        const newEmployee = {
            id: 'test-id',
            name: 'John Doe',
            isActive: true,
        };
    
        try {
            await addEmployee(newEmployee);
    
            // Validation that addEmployee did throw an error.
            // Necessary due to error in jest documentation
            expect(true).toBeFalsy();
        } catch (e) {
            expect((e as Response).status).toBe(500);
            expect((e as Response).ok).toBeFalsy();
            expect((e as Response).statusText).toBe('Internal Server Error');
        }
    });

    test('adding should be successful', async () => {
        const newEmployee = {
            id: 'test-id',
            name: 'John Doe',
            isActive: true,
        };
    
        server.use(
            rest.post('*/employees', (request, response, ctx) => {
                return response(ctx.json(newEmployee), ctx.status(201));
            })
        );
    
        try {
            const addedEmployee = await addEmployee(newEmployee);
    
            expect(addedEmployee).toEqual(newEmployee);
        } catch (e) {
            expect(e).toBeNull();
        }
    });    
});