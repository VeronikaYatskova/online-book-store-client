import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'
import { Formik, Form, Field } from 'formik';
import styles from './RegisterForm.module.scss'
import { object, string, ref } from 'yup'
import { routes } from '../../../../infrastructure/config'

function validateEmail(value:any) {
    let error;
 
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
 
    return error
}

function validateField(value:any) {
    let error

    if (!value) {
        error = 'Required';
    }

    return error
}

export const RegisterFormWidget = observer(() => {
    const [formData, setFormData] = useState('')
    
    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate(routes.auth.login.goto())
    }

    const getCharacterValidationError = (str: string) => {
        return `Your password must have at least 1 ${str} character`;
    };

    const passwordSchema = object({
        password: string()
          .required("Please enter a password")
          .min(8, "Password must have at least 8 characters")
          .matches(/[0-9]/, getCharacterValidationError("digit"))
          .matches(/[a-z]/, getCharacterValidationError("lowercase"))
          .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
        confirmPassword: string()
          .required("Please re-type your password")
          .oneOf([ref("password")], "Passwords does not match"),
      });

    return (
        <form className={styles.wrapper}>
            <div className={styles.title}>Registration</div>
            <Formik 
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={values => setFormData(JSON.stringify(values, null, 2))}
                validationSchema={passwordSchema}
            >
                {({errors, touched }) => (
                    <Form className={styles.form}>
                        <Field className={styles.textInput} name="firstName" validate={validateField} placeholder='First name' />
                        {errors.firstName && touched.firstName && <div className={styles.error}>{errors.firstName}</div>}
                        
                        <Field className={styles.textInput} name="lastName" validate={validateField} placeholder='Last name' />
                        {errors.lastName && touched.lastName && <div className={styles.error}>{errors.lastName}</div>}
                        
                        <Field className={styles.textInput} name="email" validate={validateEmail} placeholder='Email' />
                        {errors.email && touched.email && <div className={styles.error}>{errors.email}</div>}
                        
                        <Field className={styles.textInput} name="password" placeholder='Password' />
                        {errors.password && touched.password && <div className={styles.error}>{errors.password}</div>}
                        
                        <Field className={styles.textInput} name="confirmPassword" placeholder='Confirm password' />
                        {!!errors.confirmPassword && <div className={styles.error}>{errors.confirmPassword}</div>}
                        
                        <div className={styles.buttons}>
                            <button className={styles.button} type="submit">Register</button>
                            <div className={styles.link} onClick={onClickHandler}>Login</div>
                        </div>
                    </Form>
                )}
            </Formik>
        </form>
    )
})
