import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik'
import style from './LogIn.module.css'

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
        <article className={style.wrapper}>
            <h1>LOGIN TO YOUR ACCOUNT</h1>
            <Formik initialValues={initialValues} onSubmit={formikSubmit}>
                <Form>
                    <Field className={style.textInput} type='email' name='email' placeholder='Email address'/>
                    <Field className={style.textInput} type='password' name='password' placeholder='Password'/>
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
