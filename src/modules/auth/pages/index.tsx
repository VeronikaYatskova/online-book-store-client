import React from 'react'

import { routes } from '../../../infrastructure/config'
import { Route, Routes } from 'react-router-dom'

import { LoginPage } from './Login'
import { RegisterPage } from './Register'

export const AuthRouting = () => {
    
    return (
        <Routes>
            <Route path={routes.auth.login.path} element={<LoginPage />}/>
            <Route path={routes.auth.register.path} element={<RegisterPage />}/>
        </Routes>
    )
}
