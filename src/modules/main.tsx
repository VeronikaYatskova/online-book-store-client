import React from 'react'
import { BrowserRouter as Modules } from 'react-router-dom'

import { Roles } from '../infrastructure/auth/enums'

const AuthModule = React.lazy(() => import('./auth/app'))
const UserModule = React.lazy(() => import('./users/app'))
const AuthorModule = React.lazy(() => import('./authors/app'))
const MainModule = React.lazy(() => import('./main/app'))
const PublisherModule = React.lazy(() => import('./publishers/app'))

interface IBookStoreApp {
    role: Roles
}

export default function BookStoreApp(props: IBookStoreApp) {
    const { role } = props

    return (
        <Modules>
            <AuthModule />
            <MainModule />
            {role === Roles.USER && <UserModule />}
            {role === Roles.AUTHOR && <AuthorModule />}
            {role === Roles.PUBLISHER && <PublisherModule />}
        </Modules>
    )
}
