import React from 'react'

import { routes } from '../../../infrastructure/config'
import { Route, Routes } from 'react-router-dom'

import { MainPage } from './Main'

export const MainRouting = () => {

    return (
        <Routes>
            <Route path={routes.main.path} element={<MainPage />}/>
        </Routes>
    )
}
