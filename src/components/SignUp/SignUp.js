import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik'
import style from './SignUp.module.css'
import { SIGN_UP_SCHEMA } from '../../utils/validation/schemas';
import InputWithError from '../Input/InputWithError';
import SubmitBtn from '../SubmitBtn/SubmitBtn';


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
                        <InputWithError name="firstName" type="text" placeholder="First name" width="signUp" errorPos="signUpLeft"/>
                        <InputWithError name="lastName" type="text" placeholder="Last name" width="signUp" errorPos="signUpRight"/>
                        <InputWithError name="displayName" type="text" placeholder="Display name" width="signUp" errorPos="signUpLeft"/>
                        <InputWithError name="email" type="text" placeholder="Email Address" width="signUp" errorPos="signUpRight"/>
                        <InputWithError name="password" type="password" placeholder="Password" width="signUp" errorPos="signUpLeft"/>
                        <InputWithError name="passConfirmation" type="password" placeholder="Password Confirmation" width="signUp" errorPos="signUpRight"/>
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
                    <SubmitBtn type='onSubmit' innerText="SIGN UP"/>
                </Form>
            </Formik>
            <p>By clicking this button, you agree to our Terms of Service.</p>
        </article>
    );
}

export default SignUp;
