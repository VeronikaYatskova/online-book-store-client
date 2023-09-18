import React from 'react'

import { routes } from '../../../infrastructure/config'
import { Route, Routes } from 'react-router-dom'

import { MainPage } from './Main'
import { BookInfoPage } from './BookInfo'

export const MainRouting = () => {

    return (
        <Routes>
            <Route path={routes.main.path} element={<MainPage />}/>
            <Route path={routes.users.bookinfo.path} element={<BookInfoPage />} />
        </Routes>
    )
}
