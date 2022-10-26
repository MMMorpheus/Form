import * as yup from 'yup';

export const SIGN_UP_SCHEMA = yup.object().shape({
    firstName: yup.string()
            .required('Field is required')
            .min(2, 'Too short!')
            .max(35, 'Too long'),
    lastName: yup.string()
            .required('Field is required'),
    displayName: yup.string()
            .required('Field is required')
            .matches(/^[a-z0-9_-]{3,15}$/, 'Invalid display name'),
    email: yup.string()
            .required('Field is required')
            .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, 'Invalid email adress'),
    password: yup.string()
            .required('Field is required')
            .min(8, 'It must contain at least 8 characters')
            .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Invalid password'),
    passConfirmation: yup.string()
            .required('Field is required')
            .oneOf([yup.ref('password')], 'Passwords do not match'),
    // radioChoise: yup.required('Please, make a choise'),
})

export const LOG_IN_SCHEMA = yup.object().shape({
    email: yup.string()
            .required('Field is required')
            .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, 'Invalid email adress'),
    password: yup.string()
            .required('Field is required')
            .min(8, 'It must contain at least 8 characters')
            .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Invalid password'),
})
