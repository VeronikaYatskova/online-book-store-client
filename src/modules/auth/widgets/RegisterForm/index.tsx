import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'

import { TextInput } from '../../shared/ui/TextInput'
import styles from './RegisterForm.module.scss'

import { routes } from '../../../../infrastructure/config'

import { Button } from '../../../../shared/ui'

export const RegisterFormWidget = observer(() => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    
    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate(routes.auth.login.goto())
    }

    return (
        <form className={styles.wrapper}>
            <div className={styles.title}>Registration</div>
            <TextInput 
                value={firstName}
                onChange={setFirstName}
                placeholder='First name'
                required={true}
                errorMessage='Last name is required'/>
            <TextInput 
                value={lastName}
                onChange={setLastName}
                placeholder='Last name'
                required={true}
                errorMessage='Last name is required'/>
            <TextInput 
                value={email}
                onChange={setEmail}
                placeholder='Email'
                required={true}
                errorMessage='Email is invalid'
                pattern='/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$'/>
            <TextInput 
                value={password}
                onChange={setPassword}
                placeholder='Password'/>
            <TextInput 
                value={passwordConfirm}
                onChange={setPasswordConfirm}
                placeholder='Confirm password'/>

            <div className={styles.buttons}>
                <Button title='Register'/>
                <div className={styles.link} onClick={onClickHandler}>Login</div>
            </div>
        </form>
    )
})
