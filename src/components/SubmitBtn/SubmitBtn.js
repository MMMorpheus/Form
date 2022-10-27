import React from 'react';
import style from './SubmitBtn.module.css'

const SubmitBtn = ({type, innerText}) => {
    return (
        <button type={type} className={style.submitBtn}>{innerText}</button>
    );
}

export default SubmitBtn;
