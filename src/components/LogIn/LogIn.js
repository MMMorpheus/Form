import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik'
import style from './LogIn.module.css'
import { LOG_IN_SCHEMA } from '../../utils/validation/schemas';

const initialValues = {
    email: '',
    password: '',
    rememberMeToggle: 'false'
}

const LogIn = () => {

    const formikSubmit = (values, formikBag) => {
        console.log(values)
        console.log(formikBag)
        formikBag.resetForm()
    }

    return (
        <article className={style.LoginComponent}>
            <h2>LOGIN TO YOUR ACCOUNT</h2>
            <Formik initialValues={initialValues} onSubmit={formikSubmit} validationSchema={LOG_IN_SCHEMA}>
                <Form>
                    <Field className={style.TextInput} type='email' name='email' placeholder='Email address'/>
                    <ErrorMessage name='email' component="div" className={style.ErrorMessage}/>
                    <Field className={style.TextInput} type='password' name='password' placeholder='Password'/>
                    <div className={style.miniWrapper}>
                        <label>
                        <Field type='checkbox' name='rememberMeToggle' />
                            Remember me
                        </label>
                        <a>Forgot Password</a>
                    </div>
                    <button className={style.submitBTN} type='onSubmit'>LOGIN</button>
                </Form>
            </Formik>
        </article>
    );
}

export default LogIn;
