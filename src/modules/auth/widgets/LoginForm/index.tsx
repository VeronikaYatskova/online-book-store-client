import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'
import { Formik, Form, Field } from 'formik';

import styles from './LoginForm.module.scss'

import { routes } from '../../../../infrastructure/config'

function validateEmail(value:any) {
    let error;
 
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
 
    return error;
}

function validatePassword(value:any) {
    let error;
 
    if (!value) {
      error = 'Required'; 
    } else if (value.length < 7) {
        error = 'Password must be longer than 7 symbols.'
    }
 
    return error;
}

export const LoginFormWidget = observer(() => {

    const [formData, setFormData] = useState('')

    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate(routes.auth.register.goto())
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Login</div>
            <Formik 
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={values => setFormData(JSON.stringify(values, null, 2))}
            >
                {({errors, touched }) => (
                    <Form className={styles.form}>
                        <Field className={styles.textInput} name="email" validate={validateEmail} placeholder='Email' />
                        {errors.email && touched.email && <div className={styles.error}>{errors.email}</div>}
                        <Field className={styles.textInput} name="password" validate={validatePassword} placeholder='Password' />
                        {errors.password && touched.password && <div className={styles.error}>{errors.password}</div>}
                        <div className={styles.buttons}>
                            <button className={styles.button} type="submit">Login</button>
                            <div className={styles.link} onClick={onClickHandler}>Register</div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
})
