import React from 'react'

import styles from './Login.module.scss'
import { LoginFormWidget } from '../../widgets/LoginForm'

export const LoginPage = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Book Store</div>
            <LoginFormWidget />
        </div>
    )
}
