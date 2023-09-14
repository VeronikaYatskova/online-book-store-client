import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'

import { TextInput } from '../../shared/ui/TextInput'
import styles from './LoginForm.module.scss'

import { routes } from '../../../../infrastructure/config'

import { Button } from '../../../../shared/ui'

export const LoginFormWidget = observer(() => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate(routes.auth.register.goto())
    }

    return (
        <form className={styles.wrapper}>
            <div className={styles.title}>Login</div>
            <TextInput 
                value={login}
                onChange={setLogin}
                placeholder='Email'/>
            <TextInput 
                value={password}
                onChange={setPassword}
                placeholder='Password'/>
            <div className={styles.buttons}>
                <Button title='Login'/>
                <div className={styles.link} onClick={onClickHandler}>Register</div>
            </div>
        </form>
    )
})
