import React from 'react'

import { Roles } from './infrastructure/auth/enums'
import ReactDOM from 'react-dom/client'

const BookStoreApp = React.lazy(() => import('./modules/main'))

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <BookStoreApp role={Roles.AUTHOR} />
    </React.StrictMode>
)
