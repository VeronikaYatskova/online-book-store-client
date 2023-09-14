import React from 'react'

import styles from './Register.module.scss'
import { RegisterFormWidget } from '../../widgets/RegisterForm'

export const RegisterPage = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Book Store</div>
            <RegisterFormWidget />
        </div>
    )
}
