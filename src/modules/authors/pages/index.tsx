import React from 'react'

import { routes } from '../../../infrastructure/config'
import { Route, Routes } from 'react-router-dom'

import { AuthorMainPage } from './Main'

export const AuthorRouting = () => {

    return (
        <Routes>
            <Route path={routes.authors.main.path} element={<AuthorMainPage />}/>
        </Routes>
    )
}
