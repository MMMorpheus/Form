import React from 'react';
import { Field, ErrorMessage } from 'formik';
import style from './InputWithError.module.css'
import cx from 'classnames'

const InputWithError = ({name, type, placeholder, width, errorPos}) => {

    const cssForError = cx(style.errorMessage, style[errorPos])
    
    
    return (
        <label className={style.containerForErrorMessage}>
            <Field name={name}>
                {({field, form, meta}) => {
                    const cssForInput = cx(style.textInput, style[width], {
                        [style.invalid]: meta.touched && meta.error,
                        [style.valid]: meta.touched && !meta.error})

                    return (
                    <input type={type}  {...field} className={cssForInput} placeholder={placeholder}/>
                )}}
            </Field>
            <ErrorMessage name={name} component="div" className={cssForError}/>
            </label>
    );
}

export default InputWithError;
