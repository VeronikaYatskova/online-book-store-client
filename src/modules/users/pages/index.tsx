import React from 'react'

import { routes } from '../../../infrastructure/config'
import { Route, Routes } from 'react-router-dom'

import { UserMainPage } from './Main'

export const UserRouting = () => {

    return (
        <Routes>
            <Route path={routes.users.main.path} element={<UserMainPage />}/>
        </Routes>
    )
}
