import React from 'react'

import { routes } from '../../../infrastructure/config'
import { Route, Routes } from 'react-router-dom'

import { UserMainPage } from './Main'
import { MainPage } from '../../main/pages/Main'
import { BookInfoPage } from '../../main/pages/BookInfo'

export const UserRouting = () => {
    return (
        <Routes>
            {/* <Route path={routes.main.path} element={<MainPage />}/>
            <Route path={routes.users.bookinfo.path} element={<BookInfoPage />} /> */}
            <Route path={routes.users.main.path} element={<UserMainPage />}/>
        </Routes>
    )
}
