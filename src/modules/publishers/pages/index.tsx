import React from 'react'

import { routes } from '../../../infrastructure/config'
import { Route, Routes } from 'react-router-dom'

import { PublisherPage } from './Main'

export const PublisherRouting = () => {

    return (
        <Routes>
            <Route path={routes.publishers.main.path} element={<PublisherPage />}/>
        </Routes>
    )
}
