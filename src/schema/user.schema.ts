import {object,string, TypeOf} from 'zod';

export const createUserSchema = object({
    body: object({
        name: string({required_error: 'Name is required'}),
        email: string({required_error: 'Email is required'}).email('Not a valid email'),
        password: string({required_error: 'Password is required'}).min(6, 'Password must be at least 6 characters long'),
        passwordConfirmation: string({required_error: 'Password confirmation is required'})
    }).refine((data)=> data.password === data.passwordConfirmation, {
        message: 'Passwords do not match',
        path: ['passwordConfirmation']
    })
});

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>,'body.passwordConfirmation'>;