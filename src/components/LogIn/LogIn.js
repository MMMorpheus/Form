import React from 'react';
import {Formik, Field, Form} from 'formik'
import style from './LogIn.module.css'
import { LOG_IN_SCHEMA } from '../../utils/validation/schemas';
import InputWithError from '../Input/InputWithError';
import SubmitBtn from '../SubmitBtn/SubmitBtn';

const initialValues = {
    email: '',
    password: '',
    rememberMeToggle: 'false'
}

const LogIn = () => {

    const formikSubmit = (values, formikBag) => {
        console.log(values)
        formikBag.resetForm()
    }
    
    return (
        <article className={style.LoginComponent}>
            <h2>LOGIN TO YOUR ACCOUNT</h2>
            <Formik initialValues={initialValues} onSubmit={formikSubmit} validationSchema={LOG_IN_SCHEMA}>
                <Form>
                    <InputWithError name="email" type="text" placeholder="Email" />
                    <InputWithError name="password" type="password" placeholder="Password"/>
                    <div className={style.miniWrapper}>
                        <label>
                            <Field type='checkbox' name='rememberMeToggle' />
                                Remember me
                        </label>
                        <a>Forgot Password</a>
                    </div>
                    <SubmitBtn type='onSubmit' innerText="LOGIN"/>
                </Form>
            </Formik>
        </article>
    );
}

export default LogIn;
