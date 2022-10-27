import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik'
import style from './SignUp.module.css'
import { SIGN_UP_SCHEMA } from '../../utils/validation/schemas';

const initialValues ={
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    passConfirmation: '',
    radioChoise: '',
    allowToggle: false
}

const SignUp = () => {

    const formikSubmit = (values, formikBag) => {
        console.log(values)
        formikBag.resetForm()
    }

    return (
        <article className={style.SignUpComponent}>
            <div className={style.TitleWrapper}>
                <h2 className={style.Title}>CREATE AN ACCOUNT</h2>
                <h4 className={style.Subtitle}>We always keep your name and email address private.</h4>
            </div>
            <Formik initialValues={initialValues} onSubmit={formikSubmit} validationSchema={SIGN_UP_SCHEMA}>
                <Form>
                    <div className={style.TextInputContainer}>
                        <label className={style.ContainerForMessage}>
                            <Field className={style.TextInput} name='firstName' placeholder='First name' />
                            <ErrorMessage name='firstName' component="div" className={style.ErrorMessage}/>
                        </label>
                        <label className={style.ContainerForMessage}>
                            <Field className={style.TextInput} name='lastName' placeholder='Last name' />
                            <ErrorMessage name='lastName' component="div" className={style.ErrorMessage}/>
                        </label>
                        <label className={style.ContainerForMessage}>
                            <Field className={style.TextInput} name='displayName' placeholder='Display name' />
                            <ErrorMessage name='displayName' component="div" className={style.ErrorMessage}/>
                        </label>
                        <label className={style.ContainerForMessage}>
                            <Field className={style.TextInput} name='email' placeholder='Email Address' />
                            <ErrorMessage name='email' component="div" className={style.ErrorMessage}/>
                        </label>
                        <label className={style.ContainerForMessage}>
                            <Field className={style.TextInput} name='password' type='password'  placeholder='Password' />
                            <ErrorMessage name='password' component="div" className={style.ErrorMessage}/>
                        </label>
                        <label className={style.ContainerForMessage}>
                            <Field className={style.TextInput} name='passConfirmation' type='password'  placeholder='Password Confirmation' />
                            <ErrorMessage name='passConfirmation' component="div" className={style.ErrorMessage}/>
                        </label>
                    </div>
                    <div className={style.RadioContainer}>                
                        <label>
                            <Field type="radio" name="radioChoise" value="buyer" />
                                Join As a Buyer
                                <p>I am looking for a Name, Logo or Tagline for my business, brand or product.</p>
                        </label>
                    </div>
                    <div className={style.RadioContainer}>
                        <label>
                            <Field type="radio" name="radioChoise" value="seller" />
                                Join as a Creative or Marketplace Seller
                                <p>I plan to submit name ideas, Logo desiners or sell names in Domain Marketplace</p>
                        </label>
                    </div>
                    <div className={style.CheckboxContainer}>
                        <label>
                            <Field type="checkbox" name="allowToggle" />
                            Allow Squadhelp to send marketing/promotional offers from time to time
                        </label>
                    </div>
                    <button className={style.submitBTN} type='onSubmit'>Create account</button>
                </Form>
            </Formik>
            <p>By clicking this button, you agree to our Terms of Service.</p>
        </article>
    );
}

export default SignUp;
